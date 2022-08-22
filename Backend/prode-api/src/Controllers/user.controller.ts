import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { UserService } from 'src/Services/user.service';

@Controller('guess')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.GetUserById(+id);
  }

  @Get()
  async getAll() {
    return await this.userService.GetAllUsers();
  }

  @Get('friendGroup/:id')
  async getByFriendGroupId(@Param('id') id: string) {
    return await this.userService.GetUsersByFriendGroup(+id);
  }

}