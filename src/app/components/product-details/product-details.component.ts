import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../models/products';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: false
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [...products]; // Productos locales
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    if(!routeParams){
    alert("No se han encontrado datos")
    }
    this.cartService.mapProducts().subscribe(productList => {
      this.product = productList.find(p => p.id === productIdFromRoute);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
