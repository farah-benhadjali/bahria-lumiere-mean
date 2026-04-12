import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categorys : Category[] = [];
  currentProduit: Category[] | undefined;
  API_URI = 'http://localhost:3000/api/categorie';
 //injection : dependensi injection injection module http 
  constructor(private http: HttpClient,private router:Router) {
  }
  //observable : module pour manipuler les données eli jeyin m partie backend 
  getCategories(): Observable<any> {
    return this.http.get(`${this.API_URI}/categorielists`);
  }
  postCategories(newcat: Category): Observable<any> {
    console.log(newcat);
    return this.http.post<Category>(`${this.API_URI}/saveCategorie`,newcat);
  }
  deleteCategories(id:String): Observable<any> {
    return this.http.delete(`${this.API_URI}/Catdel/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.API_URI}/${id}`, data);
  }

  updateCategory(id: any, data: any): Observable<any> {
    
    return this.http.put<Category>(`${this.API_URI}/upcat/${id}`, data);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.API_URI}/get/${id}`);
  }
}
