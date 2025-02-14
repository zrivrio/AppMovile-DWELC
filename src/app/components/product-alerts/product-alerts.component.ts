import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/products';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html',
    styleUrl: './product-alerts.component.css',
    standalone: false
})
export class ProductAlertsComponent {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
