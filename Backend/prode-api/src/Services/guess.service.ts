import { Injectable } from '@nestjs/common';
import { Guess, Match } from '@prisma/client';
import { isGuessValid } from 'src/helpers/checkGuess.function';
import { CalculatePoints } from 'src/helpers/points.function';
import { createGuessDto } from './dto/createGuess.dto';
import { UpdateGuessDto } from './dto/updateGuess.dto';
import { PrismaService } from './Prisma.service';


@Injectable()
export class GuessService {
    constructor(private readonly prismaService: PrismaService) {}

    async CreateGuess(guess: createGuessDto): Promise<Guess| null> {
        const match = await this.getMatch(guess.match_id);
        if (!isGuessValid(guess, match)) 
        return null;

        var newGuess = {
            team_a_score: guess.team_a_score,
            team_b_score: guess.team_b_score,
            team_winner: guess.team_winner,
            time: new Date(),
            Matches: {
                connect: {id: guess.match_id}
            },
            Users: {
                connect: {id: guess.user_id}
            }
        };
       return await this.prismaService.guess.create({data: newGuess});
    }

    async UpdateGuess(id: number, updateMatchDto: UpdateGuessDto) {
        const guess = await this.prismaService.guess.findFirst({
            where: {
                id
            }
        });

        const match = await this.getMatch(guess.match_id);
        if (!isGuessValid(updateMatchDto, match)) 
        return null;

        return await this.prismaService.guess.update({
            where: {
                id,
            },
            data: {...updateMatchDto, time: new Date()},
        });
    }

    async GetGuessByMatchIdAndUserId(matchId: number, userId: number): Promise<Guess> {
        const guess = await this.prismaService.guess.findFirstOrThrow({
            where: {
                match_id: matchId,
                user_id: userId,
            },
            include: {
                Matches: true,
            }
        });
        await this.setPoints(guess, guess.Matches[0]);
        return guess;
    }

    async GetGuessesByUserId(userId: number) : Promise<Guess[]> {
        const guesses = await this.prismaService.guess.findMany({
            where: {
                user_id: userId,
            },
            include: {
                Matches: true,
            }
        });
        
        guesses.forEach(async (g) => {
            await this.setPoints(g, g.Matches);
        });

        return guesses;
    }

    async findMany(user_Id: number,match_Id?: number, take?: number, skip?:number, orderBy?: 'asc' | 'desc'): Promise<Guess[]> {
        const and = {AND: [
            {user_id: user_Id},
            match_Id ? {match_id: match_Id} : {},
        ]};

        const guesses = await this.prismaService.guess.findMany({
            where: {
            ...and,
            }, 
            take: Number(take) || undefined,
            skip: Number(skip) || undefined,
            orderBy: { 
            time: orderBy || 'asc',
            },
            include: {
                Matches: true,
            }
        });

        guesses.forEach(async g => {
            await this.setPoints(g, g.Matches);
        });

        return guesses;
    }
    
    async findOne(id: number): Promise<Guess> {
        return await this.findOne(+id);
    }

    async remove(id: number) {
        return await this.prismaService.guess.delete({
            where: {
                id,
            }
        });
    }

    private async getMatch(matchId: number): Promise<Match> {
        return await this.prismaService.match.findFirst({
            where: {
                id: matchId,
            }
        });
    }

    private async setPoints(guess: Guess, match: Match) {
        if (guess.points !== null) return;
        if (match.winner !== null) {
            const points = CalculatePoints(guess, match);
            await this.prismaService.guess.update({
                where: {
                    id: guess.id,
                },
                data: { ...guess, points },
            });
            guess.points = points;
        }
    }
}
