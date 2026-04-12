import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[] = [];
  categories : Category[] = [];
  currentProduit: Produit[] | undefined;
  API_URI = 'http://localhost:3000/api/produit';
  API_URI1 = 'http://localhost:3000/api/cart';
 //injection : dependensi injection injection module http 
  constructor(private http: HttpClient,private router:Router) {
  }
  //observable : module pour manipuler les données eli jeyin m partie backend 
  getProducts(): Observable<any> {
    return this.http.get(`${this.API_URI}/produitlists`);
  }
  /*postProducts(newpro: Produit): Observable<any> {
    console.log(newpro);
    return this.http.post<Produit>(`${this.API_URI}/saveProduit`,newpro);
  }*/
  deleteProducts(id:String): Observable<any> {
    return this.http.delete(`${this.API_URI}/Prodel/${id}`);
  }   

  addProduct(newProd:any, imgPro: File): Observable<any> {
    const fd = new FormData();
    
    fd.append('category', newProd.category);
    fd.append('Pname', newProd.Pname)   
    fd.append('Price', newProd.Price);    
    fd.append('Desc', newProd.Desc);
    fd.append('img', imgPro, imgPro.name);
  
    return this.http.post<Produit>(`${this.API_URI}/saveProduit`, fd);
  }


  findAllProductsByCategory(id:any): Observable<any>{
    return this.http.get<any>(`${this.API_URI}/${id}`);
    
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.API_URI}/${id}`, data);
  }

  updateProduct(id: any, data: any): Observable<any> {
    
    return this.http.put<Produit>(`${this.API_URI}/update/${id}`, data);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.API_URI}/get/${id}`);
  }

  addToCart(payload:any) {
    return this.http.post(`${this.API_URI1}/`, payload);
  }

  getCartItems() {
    return this.http.get(`${this.API_URI1}/`);
  }
  increaseQty(payload:any) {
    return this.http.post(`${this.API_URI1}/`, payload);
  }

  emptyCart() {
    return this.http.delete(`${this.API_URI1}/empty-cart`);
  }
  
}

