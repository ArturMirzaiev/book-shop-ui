import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {

    _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    _isRoleAdmin$ = new BehaviorSubject<string>("User")
    RoleAdmin$ = this._isRoleAdmin$.asObservable()
    userRole = '';

    constructor(
        private http: HttpClient,
        private router: Router,
        private jwtService: JwtService) {

        const token = this.getToken()
        this._isLoggedIn$.next(!!token)
        
        if(token){

            const decodedToken = this.jwtService.decodeToken(token);
            this._isRoleAdmin$.next(decodedToken.Role)
            this.userRole = decodedToken.Role;
        }
        
    }

    signUp(userObj: any) {
        return this.http.post<any>(`${environment.authUrl}/register`, userObj);
    }

    login(loginObj: any) {
        return this.http.post<any>(`${environment.authUrl}/login`, loginObj)
    }

    signOut() {
        localStorage.removeItem("token");
        this.router.navigate(['login']);
    }

    storeToken(tokenValue: string) {
        localStorage.setItem("token", tokenValue);
    }

    getToken() {
        return localStorage.getItem("token");
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem("token");
    }

    refreshToken() {
        return this.http.post(`${environment.authUrl}/refresh-token`, {});
    }
}
