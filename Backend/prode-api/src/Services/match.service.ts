import { Injectable } from '@nestjs/common';
import { PrismaService } from './Prisma.service';
import moment from 'moment';

@Injectable()
export class MatchService {
  constructor(private readonly prismaService: PrismaService) {}
  

  findMany(team?: string, stage?: string, group?: string, date?: Date, take?: number, skip?:number, orderBy?: 'asc' | 'desc') {
    const or = team ? {OR: [
      { teamA_id: { equals: team } },
      { teamB_id: { equals: team } },
    ]} : {};

    let dateQuery = {};
    if (date) {
      const momentDate = moment(date);
      const startDate = momentDate.startOf('day').toDate();
      const endDate = momentDate.endOf('day').toDate();
      dateQuery = { time: { gte: startDate, lte: endDate } };
    }

    const and = {AND: [
      date ?  dateQuery : {}, 
      stage ? { stage: { equals: stage } } : {}, 
      group ? { group: { equals: group } } : {}
    ]};

    return this.prismaService.match.findMany({
      where: {
       ...or,
       ...and,
      }, 
      take: Number(take) || undefined,
      skip: Number(skip) || undefined,
      orderBy: { 
        time: orderBy || 'asc',
      }
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} match`;
  }
}
