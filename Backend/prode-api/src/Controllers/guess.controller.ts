import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { createGuessDto } from 'src/Services/dto/createGuess.dto';
import { registerUserDto } from 'src/Services/dto/registerUser.dto';
import { GuessService } from 'src/Services/guess.service';

@Controller('auth')
export class GuessController {
  constructor(private readonly guessService: GuessService) {}

  @Post()
  login(@Body() guess: createGuessDto) {
    return this.guessService.CreateGuess(guess);
  }
}