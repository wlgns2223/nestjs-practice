import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signUp(@Body() dto: AuthDTO) {
        return this.authService.signUp(dto);
    }

    @Post('signin')
    signIn() {
        return this.authService.signIn();
    }
}
