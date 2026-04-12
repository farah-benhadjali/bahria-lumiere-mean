import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/services/auth.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-upcat',
  templateUrl: './upcat.component.html',
  styleUrls: ['./upcat.component.css']
})
export class UpcatComponent implements OnInit {

  categories: Category[] = [];
  category!: Category;
  constructor(private as : AuthService ,private categoryService: CategorieService, private route: ActivatedRoute,private router: Router) { }

  categoryForm: Category = {
    _id: '',
    Cname: '',
    Desc: '',
  };
  message = '';
  ngOnInit(): void {
    this.message = '';
    this.getCategoryByID(this.route.snapshot.params.id);
  }

  getCategoryByID(id: String): void {
    this.categoryService.get(id)
      .subscribe(
        data => {
          this.categoryForm = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCategorys(): void {
    this.categoryService.updateCategory(this.categoryForm._id, this.categoryForm)
      .subscribe(
        response => { 
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/listcat']);
        },
        error => {
          console.log(error);
        });
  }
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.as.logoutUser()
    }
  }

}
