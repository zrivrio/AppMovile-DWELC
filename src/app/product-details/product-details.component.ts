import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../cart.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-product-details',
  imports: [CommonModule, HttpClientModule, NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private cartService:CartService
  ) { 
  
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    console.log(routeParams);
    console.log(productIdFromRoute);
    
    
    this.product = products.find(product => product.productId === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }

}
