import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Produit } from 'src/app/models/produit';
import { AuthService } from 'src/app/services/auth.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  produits: Produit[] = [];
  categories: Category[] = [];
  fname: String;
  constructor(private categoryService: CategorieService,private ps: ProduitService,private as:AuthService) { 
    this.fname = localStorage.getItem('fname');
  }

  ngOnInit(): void {
    this.listCategories();
    this.listProducts();
  }
  listCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        //console.log(data);
      },
      (err) => {
        //console.log(err);
      }
    );
  }
  listProducts() {
    this.ps.getProducts().subscribe(
      (data) => {
        this.produits = data;
        //console.log(data);
      },
      (err) => {
        //console.log(err);
      }
    );
  }
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.as.logoutUser()
    }
  }
}
