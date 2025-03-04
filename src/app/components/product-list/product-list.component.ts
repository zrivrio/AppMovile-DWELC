import { Component } from '@angular/core';

import { products, Product } from '../../models/products';
import { CartService } from '../../service/cart.service';
import { Product2 } from '../../models/products2';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent {
  products: Product[] = [];
 

  constructor(private cartService: CartService){
    this.cartService.mapProducts().subscribe(mappedProducts => {
      this.products = mappedProducts;
    });    
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/