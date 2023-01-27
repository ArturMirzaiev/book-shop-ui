import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    public username = ''
    public role = ''

    constructor() { }

    decodeToken(token) {
        const jwt: any = jwtDecode(token);
        this.username = jwt.name;
        this.role = jwt.role;
    }
}
