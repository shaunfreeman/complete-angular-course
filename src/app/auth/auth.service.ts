import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  login(credentials) {
    return this.http.post('/api/authenticate', credentials)
      .pipe(map((result: any) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      }));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  get currentUser() {
    return this.jwtHelper.decodeToken();
  }
}

export function tokenGetter() {
  return localStorage.getItem('token');
}
