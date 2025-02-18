import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../../service/cart.service';
import { Product } from '../../models/products';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: false
})
export class CartComponent {
  items: Product[] = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    shipping: '' // Add shipping to the form group
  });
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
    // Update the items array after removal
    this.items = this.cartService.getItems();
  }
}
