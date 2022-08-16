import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsController } from './Controllers/teams.controller';
import { PrismaService } from './Services/Prisma.service';
import { TeamsService } from './Services/teams.service';

@Module({
  imports: [],
  controllers: [AppController, TeamsController],
  providers: [AppService, TeamsService, PrismaService],
})
export class AppModule {}
