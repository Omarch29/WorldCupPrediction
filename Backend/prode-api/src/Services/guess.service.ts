import { Injectable } from '@nestjs/common';
import { Guesses } from '@prisma/client';
import { createGuessDto } from './dto/createGuess.dto';
import { PrismaService } from './Prisma.service';


@Injectable()
export class GuessService {
    constructor(private readonly prismaService: PrismaService) {}

    async CreateGuess(guess: createGuessDto) {
        var newGuess = {
            ...guess,
            time: new Date(),
            Matches: [],
            Users: []
        };
       return await this.prismaService.guesses.create({data: newGuess});
    }

    async UpdateGuess(guess: Guesses) {
        return await this.prismaService.guesses.update({
            where: {
                id: guess.id,
            },
            data: guess,
        });
    }

    async GetGuessByMatchIdAndUserId(matchId: number, userId: number): Promise<Guesses> {
        return await this.prismaService.guesses.findFirstOrThrow({
            where: {
                match_id: matchId,
                user_id: userId,
            },
            include: {
                Matches: true,
            }
        });
    }

    async GetGuessByUserId(userId: number) : Promise<Guesses[]> {
        return await this.prismaService.guesses.findMany({
            where: {
                user_id: userId,
            },
        });
    }
}
