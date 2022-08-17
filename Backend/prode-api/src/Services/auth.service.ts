import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { loginDto } from './dto/login.dto';
import { registerUserDto } from './dto/registerUser.dto';
import { PrismaService } from './Prisma.service';


@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}


    async login(loginDto: loginDto): Promise<boolean> {
     const user = await this.prismaService.users.findFirstOrThrow({
        where: {
            AND: [{username: loginDto.username}, {password: loginDto.password}],
        }
     });
        return !!user;
    }

    async register(registerUserDto: registerUserDto): Promise<Users> {
        const newUser = await this.prismaService.users.create({
            data: {
                ...registerUserDto,
            }});
        return newUser;
    }

}

