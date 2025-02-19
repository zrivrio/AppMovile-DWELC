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
  products = [...products];
  cambio!: Product ;
  product2 !: Product2 [];

  constructor(private cartService: CartService){
    this.cartService.getItemJson().subscribe( product2 => 
      product2.forEach(p => {
         this.cambio.id = p.product_id,
      this.cambio.name = p.product_name,
      this.cambio.price = p.cost
      this.cambio.description = p.detail
      this.cambio.provider = {
        id: 1,
        name: ""
      }
      this.products.push(this.cambio);
      })
    )
     console.log(products);
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