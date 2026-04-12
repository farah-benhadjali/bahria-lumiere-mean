import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/services/auth.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-listcat',
  templateUrl: './listcat.component.html',
  styleUrls: ['./listcat.component.css']
})
export class ListcatComponent implements OnInit {

  categories: Category[] = [];
  
  constructor(private cs:CategorieService,private as:AuthService) { }

  ngOnInit(): void {
    this.listCategories();
  }
  listCategories() {
    this.cs.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteCategorie(_id:String)
 {
   this.cs.deleteCategories(_id).subscribe(() => {
       alert("Categorie supprimée");
 }); 

  }
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.as.logoutUser()
    }
  }
  refresh(): void {
    window.location.reload();
}

}
