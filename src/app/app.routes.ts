import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShippingComponent } from './shipping/shipping.component';
export const routes: Routes = [
    {path:'', component:ProductListComponent },
    { path:'products/:productId',component:ProductDetailsComponent},
    { path: 'cart', component: CartComponent },
    { path: 'shipping', component: ShippingComponent },
];
