import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  produits: Produit[] = [];
  Cname: String;
  id: String;
  constructor(private ps:ProduitService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');    
    this.listProducts(this.id);
  }
  listProducts(id: any) {
    this.ps.findAllProductsByCategory(id).subscribe(
      (data) => {
        this.produits = data.data;
        this.Cname = data.name;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  _addItemToCart( id:any, quantity:any): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.ps.addToCart(payload).subscribe(() => {
      //this.listProducts();
      alert('Product Added');
    });
  }
}
