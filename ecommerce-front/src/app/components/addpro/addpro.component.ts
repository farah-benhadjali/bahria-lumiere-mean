import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Produit } from 'src/app/models/produit';
import { AuthService } from 'src/app/services/auth.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css']
})
export class AddproComponent implements OnInit {
  produits: Produit[] = [];
  categories: Category[] = [];
  category!: Category;
  imgpro: any;
  constructor(private ps: ProduitService, private categoryService: CategorieService ,private as:AuthService) { }
  addproForm: Produit = {
    _id: '',
    Pname: '',
    category: this.category,
    Desc: '',
    Price: 0,   
    img: ''
  };


  ngOnInit(): void {
    this.listCategories();
  }

  loadImage(img: any) {
    this.imgpro = img.target.files[0];
    console.log(this.imgpro);
  }

  addProduct() {
    this.ps.addProduct(this.addproForm, this.imgpro).subscribe(
      (data) => {
        
          console.log(data);
          alert('Product saved successfully!');
          //this.listProduct();
        }
      ,
      (err) => {
        console.log(err);        
      }
    );
  }

  listCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(data);
      },
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