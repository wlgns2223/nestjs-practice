import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    signIn() {
        return { msg: 'I am signed In' };
    }
    signUp() {
        return { msg: 'I am signed up' };
    }
}
