import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { AuthService } from 'src/app/services/auth.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-listpro',
  templateUrl: './listpro.component.html',
  styleUrls: ['./listpro.component.css']
})
export class ListproComponent implements OnInit {

  produits: Produit[] = [];
  
  constructor(private ps:ProduitService,private as:AuthService) { }

  ngOnInit(): void {
    this.listProducts();
  }
  listProducts() {
    this.ps.getProducts().subscribe(
      (data) => {
        this.produits = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  deleteProduit(_id:String)
 {
   this.ps.deleteProducts(_id).subscribe(() => {
       alert("produit supprimé");
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
