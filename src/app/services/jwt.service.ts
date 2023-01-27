import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    constructor() { }

    decodeToken(token) {
        const jwt: any = jwtDecode(token);
        return jwt;
    }
}
