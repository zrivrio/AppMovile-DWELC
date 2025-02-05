import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-alerts',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
