import { Controller, Get, Param, Query } from '@nestjs/common';
import { MatchService } from '../Services/match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

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
}
