import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/services/auth.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {

  categories: Category[] = [];
  category!: Category;
  constructor(private ps: ProduitService, private cs: CategorieService ,private as:AuthService) { }
  addcatForm: Category = {
    _id: '',
    Cname: '',
    Desc: '',
  };


  ngOnInit(): void {
  }

  addCategory() {
    this.cs.postCategories(this.addcatForm).subscribe(
      (data) => {
          console.log(data);
          alert('Categorie saved successfully!');
          //this.listProduct();
        }
      ,
      (err) => {
        console.log(err);        
      }
    );
  }
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.as.logoutUser()
    }
  }
}