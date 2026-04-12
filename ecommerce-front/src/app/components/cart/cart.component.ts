import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:any;
  cartDetails:any;
  constructor(private productService: ProduitService) {}
  
  _getCart(): void {
    this.productService.getCartItems().subscribe((data: any) => {
      this.carts = data.data;
      // this.cartDetails = data.data;
      console.log(this.carts);
    });
  }
  _increamentQTY(id:any, quantity:any): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.productService.increaseQty(payload).subscribe(() => {
      this._getCart();
      alert('Product Added');
    });
  }
  
  _emptyCart(): void {
    this.productService.emptyCart().subscribe(() => {
      this._getCart();
      alert('Cart Emptied');
    });
  }
  ngOnInit(): void {
    this._getCart();
  }

}