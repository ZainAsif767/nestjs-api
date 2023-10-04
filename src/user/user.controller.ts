import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard';


@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@Req() req: Request) {
        return req.user;
    }
}