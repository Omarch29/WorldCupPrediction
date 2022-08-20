import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamController } from './Controllers/team.controller';
import { PrismaService } from './Services/Prisma.service';
import { TeamService } from './Services/team.service';
import { MatchController } from './Controllers/match.controller';
import { MatchService } from './Services/match.service';
import { AuthService } from './Services/auth.service';
import { AuthController } from './Controllers/auth.controller';
import { GuessController } from './Controllers/guess.controller';
import { GuessService } from './Services/guess.service';

@Module({
  imports: [],
  controllers: 
    [AppController,
    TeamController,
    MatchController,
    AuthController,
    GuessController],
  providers: 
    [AppService,
    TeamService, 
    PrismaService, 
    MatchService,
    AuthService,
    GuessService],
})
export class AppModule {}
