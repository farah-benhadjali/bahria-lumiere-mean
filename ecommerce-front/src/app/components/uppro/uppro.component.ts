import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Produit } from 'src/app/models/produit';
import { AuthService } from 'src/app/services/auth.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-uppro',
  templateUrl: './uppro.component.html',
  styleUrls: ['./uppro.component.css']
})
export class UpproComponent implements OnInit {

  
  produits: Produit[] = [];
  categories: Category[] = [];
  productImage!: any;
  category!: Category;
  constructor(private productService: ProduitService, 
    private categoryService: CategorieService, private route: ActivatedRoute,private router: Router,
    private as:AuthService) { }

  productForm: Produit = {
    _id: '',
    Pname: '',
    category: this.category,
    Desc: '',
    Price: 0,   
    img: ''
  };
  message = '';
  ngOnInit(): void {
    this.message = '';
    this.listCategories();
    this.getProductByID(this.route.snapshot.params.id);
  }

  loadImage(img: any) {
    this.productImage = img.target.files[0];
    console.log(this.productImage);
  }
  getProductByID(id: String): void {
    this.productService.get(id)
      .subscribe(
        data => {
          this.productForm = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProduit(): void {
    this.productService.updateProduct(this.productForm._id, this.productForm)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/listpro']);
        },
        error => {
          console.log(error);
        });
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