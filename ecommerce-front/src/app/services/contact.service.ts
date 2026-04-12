import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts : Contact[] = [];
  currentContact: Contact[] | undefined;
  API_URI = 'http://localhost:3000/api/contact';
 //injection : dependensi injection injection module http 
  constructor(private http: HttpClient,private router:Router) {
  }
  //observable : module pour manipuler les données eli jeyin m partie backend 
  getContacts(): Observable<any> {
    return this.http.get(`${this.API_URI}/msglists`);
  }
  postContacts(newmsg: Contact): Observable<any> {
    console.log(newmsg);
    return this.http.post<Contact>(`${this.API_URI}/savemsg`,newmsg);
  }

  deleteContacts(id:String): Observable<any> {
    return this.http.delete(`${this.API_URI}/msgdel/${id}`);
  }
    
}
