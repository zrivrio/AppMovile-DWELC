import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ProviderListComponent } from "./components/provider-list/provider-list.component";
import { ProviderDetailComponent } from './components/provider-detail/provider-detail.component';
import { ProductProviderComponent } from './components/product-provider/product-provider.component';

@NgModule({ declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,
    ],
    bootstrap: [
        AppComponent
    ], imports: [BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: '', component: ProductListComponent },
        { path: 'products/:productId', component: ProductDetailsComponent },
        { path: 'cart', component: CartComponent },
        { path: 'shipping', component: ShippingComponent },
        { path: 'provider/:providerId', component: ProviderDetailComponent },
        { path: 'productsProvider/:providerId', component: ProductProviderComponent },
    ]), ProviderListComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
