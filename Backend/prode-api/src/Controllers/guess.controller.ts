import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { createGuessDto } from 'src/Services/dto/createGuess.dto';
import { UpdateGuessDto } from 'src/Services/dto/updateGuess.dto';
import { GuessService } from 'src/Services/guess.service';

@Controller('guess')
export class GuessController {
  constructor(private readonly guessService: GuessService) {}

  @Post('')
  async createGuess(@Body() newGuess: createGuessDto) {
    const guess = this.guessService.CreateGuess(newGuess);
    if (!guess) 
      throw new BadRequestException('Invalid guess');
    
    return guess;
  }

  @Get('/user/:user_id')
  async GetMatches( @Param('user_id')user_id: number, 
  @Query('take') take?: number,
  @Query('skip') skip?: number,
  @Query('match') match_id?: number,
  @Query('orderBy') orderBy?: 'asc' | 'desc',) {
     return await this.guessService.findMany(+user_id, match_id, take, skip, orderBy);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.guessService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMatchDto: UpdateGuessDto) {
    const guess = await this.guessService.UpdateGuess(+id, updateMatchDto);
    if (!guess) 
      throw new BadRequestException('Invalid guess');
    return guess
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.guessService.remove(+id);
  }
  
}