import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../models/products';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'], // 🔹 Corrección en styleUrls
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
    // Find the product that correspond with the id provided in route.
    this.product = this.products.find(product => product.id === productIdFromRoute);

    this.cartService.getItemJson().subscribe(products2 => {
      const productsMap = products2.map(p => ({
        id: p.product_id,
        name: p.product_name,
        price: p.cost,
        description: p.detail,
        provider: { id: Number(p.suppiler), name: "" }
      }));

      this.products = [...this.products, ...productsMap];

      if (!this.product) {
        this.product = this.products.find(product => product.id === productIdFromRoute);
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
