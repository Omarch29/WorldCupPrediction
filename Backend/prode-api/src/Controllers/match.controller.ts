import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MatchService } from '../Services/match.service';
import { CreateMatchDto } from '../Services/dto/create-match.dto';
import { UpdateMatchDto } from 'src/Services/dto/update-match.dto';


@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get()
  GetMatches( @Query('take') take?: number,
  @Query('skip') skip?: number,
  @Query('team') team?: string,
  @Query('stage') stage?: string,
  @Query('group') group?: string,
  @Query('date') date?: Date,
  @Query('orderBy') orderBy?: 'asc' | 'desc',) {
     return this.matchService.findMany(team, stage, group, date, take, skip, orderBy);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.update(+id, updateMatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchService.remove(+id);
  }
}
