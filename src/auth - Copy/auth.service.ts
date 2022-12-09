import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    login() {
        return {msg: "This is your first login" }
    }

    signup() {
        return {msg: "This is your first signup"}
    }
}