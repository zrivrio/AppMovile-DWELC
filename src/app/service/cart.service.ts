import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];
  private itemsSubject = new BehaviorSubject<Product[]>(this.items);
  itemsObservable = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
    this.itemsSubject.next(this.items); // Notify subscribers of the change
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items); // Notify subscribers of the change
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  removeFromCart(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id); // Assuming `id` is a unique identifier for products
    if (index !== -1) {
      this.items.splice(index, 1); // Remove the item
      this.itemsSubject.next(this.items); // Notify subscribers of the change
    }
  }
}
