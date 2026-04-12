import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];
  currentUser: User[] | undefined;
  API_URI = 'http://localhost:3000/api/auth';
 //injection : dependensi injection injection module http 
  constructor(private http: HttpClient,private router:Router) {
  }
  //observable : module pour manipuler les données eli jeyin m partie backend 
  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URI}/userlists`);
  }
  deleteUsers(id:String): Observable<any> {
    return this.http.delete(`${this.API_URI}/userdel/${id}`);
  }

}
