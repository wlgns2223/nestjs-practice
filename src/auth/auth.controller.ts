import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signUp(@Body('email') email: string, @Body('password') password: string) {
        console.log({
            email,
            password,
        });

        return this.authService.signUp();
    }

    @Post('signin')
    signIn() {
        return this.authService.signIn();
    }
}
