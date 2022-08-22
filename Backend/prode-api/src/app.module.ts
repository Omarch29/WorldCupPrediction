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
import { UserController } from './Controllers/user.controller';
import { FriendGroupController } from './Controllers/friendGroup.controller';
import { UserService } from './Services/user.service';
import { FriendGroupService } from './Services/friendGroup.service';

@Module({
  imports: [],
  controllers: 
    [AppController,
    TeamController,
    MatchController,
    AuthController,
    GuessController,
    UserController,
    FriendGroupController
  ],
  providers: 
    [AppService,
    TeamService, 
    PrismaService, 
    MatchService,
    AuthService,
    GuessService,
    UserService,
    FriendGroupService],
})
export class AppModule {}
