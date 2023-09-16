import { Injectable } from "@nestjs/common";


@Injectable({})
export class AuthService {
    signup() {
        return { msg: 'i have signed up'};
    }

    signin() {
        return { msg: 'i have signed in'};
    }
}