import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  
  constructor(private ps:ProduitService) { }

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
  _addItemToCart( id:any, quantity:any): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.ps.addToCart(payload).subscribe(() => {
      this.listProducts();
      alert('Product Added');
    });
  }
}
