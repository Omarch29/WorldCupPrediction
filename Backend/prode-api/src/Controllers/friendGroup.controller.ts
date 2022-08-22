import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { FriendGroup } from '@prisma/client';
import { FriendGroupService } from 'src/Services/friendGroup.service';


@Controller('FriendGroup')
export class FriendGroupController {
  constructor(private readonly groupService: FriendGroupService) {}

  @Post('')
  async createGuess(@Body() newGroup: FriendGroup) {
    return this.groupService.createFriendGroup(newGroup);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.groupService.GetFriendGroup(+id);
  }

  @Get('')
  async getAll() {
    return await this.groupService.GetAllFriendGroups();
  }

  @Get('/user/:id')
  async getByUserId(@Param('id') id: string) {
    return await this.groupService.GetFriendGroupsByUserId(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() group: FriendGroup) {
    return await this.groupService.updateFriendGroup(+id, group);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.groupService.deleteFriendGroup(+id);
  }

  @Post(':id/user/:userId')
  async addUserToGroup(@Param('id') id: string, @Param('userId') userId: string) {
    return await this.groupService.AddUserToFriendGroup(+id, +userId);
  }

  @Delete(':id/user/:userId')
  async removeUserFromGroup(@Param('id') id: string, @Param('userId') userId: string) {
    return await this.groupService.RemoveUserFromFriendGroup(+id, +userId);
  }
  
}