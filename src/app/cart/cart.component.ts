import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-cart',
  imports: [CommonModule,HttpClientModule, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: any[] = []; 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}
