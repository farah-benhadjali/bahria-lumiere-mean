import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User[] | undefined;
  API_URI= 'http://localhost:3000/api';
  constructor(private http: HttpClient, private router: Router) { }

  login(user: User): Observable<any> {
      return this.http.post<User>(`${this.API_URI}/auth/signin`,user);
                  
  }
  
  signup(newUser: User): Observable<any> {
    return this.http.post<User>(`${this.API_URI}/auth/signup`, newUser);
  }

  logoutUser() {
    localStorage.clear()
    window.location.reload()
  }

}
