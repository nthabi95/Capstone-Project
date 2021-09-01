import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  constructor(private _cartSevice: CartService,
    private_router: Router) { }

  ngOnInit(): void {
    this.cartItems = this._cartSevice.loadCartItems();
    console.log(this.cartItems);
  }

  isCartEmpty(){
    if (this._cartSevice.clearCartItems()){
      return true;
    }
    return false;
  }

  cartEmpty(){
    this._cartSevice.clearCartItems();
    alert('cart is cleared now')
  }

  removeCartItem(id) {
    for (var i =0; i <this.cartItems.length; i++){
      let item = this.cartItems[i];
      if (item.id ==id){
        this.cartItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
  }

}
