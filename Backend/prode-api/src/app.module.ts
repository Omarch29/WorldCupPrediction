import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamController } from './Controllers/team.controller';
import { PrismaService } from './Services/Prisma.service';
import { TeamService } from './Services/team.service';
import { MatchController } from './Controllers/match.controller';
import { MatchService } from './Services/match.service';

@Module({
  imports: [],
  controllers: [AppController, TeamController, MatchController],
  providers: [AppService, TeamService, PrismaService, MatchService],
})
export class AppModule {}
