import { Body, Controller, Post } from "@nestjs/common";
import { Request } from 'express';
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log({
            dto: dto,
        })
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}
