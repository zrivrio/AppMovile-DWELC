import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule, NgIf } from '@angular/common';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductAlertsComponent, RouterModule, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
   products = products;
   
   share(){
    alert('The product has been shared!');
   }
}
