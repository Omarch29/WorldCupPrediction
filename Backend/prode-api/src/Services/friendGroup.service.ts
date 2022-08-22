import { Injectable } from '@nestjs/common';
import { FriendGroup } from '@prisma/client';
import { PrismaService } from './Prisma.service';


@Injectable()
export class FriendGroupService {
    constructor(private readonly prismaService: PrismaService) {}

    async GetFriendGroup(id: number) {
        return await this.prismaService.friendGroup.findFirstOrThrow({
            where: {
                id,
            },
            include: {
                User_Group: {
                    include: { User: true }
                }
            }
        });
    }

    async GetAllFriendGroups() {
        return await this.prismaService.friendGroup.findMany();
    }

    async GetFriendGroupsByUserId(id: number): Promise<FriendGroup[]> {
        const user = await this.prismaService.user.findFirstOrThrow({
            where: {
                    id,
                },
            include: {
                User_Group: {
                    include: { FriendGroup: true }
                }
            }
        });

        return user.User_Group.map(userGroup => userGroup.FriendGroup);
    }

    async createFriendGroup(friendGroup: FriendGroup): Promise<FriendGroup> {
        return await this.prismaService.friendGroup.create({
            data: friendGroup
        });
    }

    async updateFriendGroup(id: number, friendGroup: FriendGroup): Promise<FriendGroup> {
        return await this.prismaService.friendGroup.update({
            where: {
                id,
            },
            data: friendGroup
        });
    }

    async deleteFriendGroup(id: number): Promise<FriendGroup> {
        await this.prismaService.user_Group.deleteMany({
            where: { 
                Group_id: id,
            }
        });
        
        return await this.prismaService.friendGroup.delete({
            where: {
                id,
            }
        });
    }

    async AddUserToFriendGroup(friendGroupId: number,userId: number): Promise<FriendGroup> {
        return await this.prismaService.friendGroup.update({
            where: {
                id: friendGroupId,
            },
            data: {
                User_Group: { connect: { id: userId } }
            }
        });
    }

    async RemoveUserFromFriendGroup(friendGroupId: number, userId: number): Promise<FriendGroup> {
        return await this.prismaService.friendGroup.update({
            where: {
                id: friendGroupId,
            },
            data: {
                User_Group: { disconnect: { id: userId } }
            }
        });
    }
}
