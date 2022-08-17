import { Injectable } from '@nestjs/common';
import { PrismaService } from './Prisma.service';


@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}


}