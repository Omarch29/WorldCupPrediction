import { Injectable } from '@nestjs/common';
import { Guess, User } from '@prisma/client';
import { PrismaService } from './Prisma.service';


@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async GetUsersByFriendGroup(id: number, guesses?: boolean) : Promise<(User&{Guess:Guess[];})[]> {
        const friendsGroup = await this.prismaService.friendGroup.findFirst({
            where: {
                id,
            },
            include:
            { User_Group: {
                include: { User: { include: { Guess: !!guesses }} }
                } 
            }
        });
        return friendsGroup.User_Group.map(userGroup => userGroup.User);
    }
        

    async GetAllUsers(guesses?: boolean) : Promise<User[]> {
        return await this.prismaService.user.findMany({
            include:
                { User_Group: {
                    include: { FriendGroup: true }
                            }, 
                  Guess: !!guesses          
                }
        });
    }

    async GetUserById(id: number, guesses?: boolean) : Promise<User> {
        return await this.prismaService.user.findFirstOrThrow({
            where: {
                id,
            },
            include:
                { User_Group: {
                    include: { FriendGroup: true }
                            }, 
                  Guess: !!guesses          
                }
        });
    }


}