import { Injectable } from '@nestjs/common';
import { PrismaService } from './Prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.team.findMany();
  }
}
