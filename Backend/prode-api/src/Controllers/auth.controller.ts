import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from 'src/Services/auth.service';
import { loginDto } from 'src/Services/dto/login.dto';
import { registerUserDto } from 'src/Services/dto/registerUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: loginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() registerUserDto: registerUserDto) {
    return this.authService.register(registerUserDto);
  }

}