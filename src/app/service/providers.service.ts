import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProvidersM } from '../models/providers';
import { Product, products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  providers: ProvidersM[] = [];

  private url = "http://localhost:3000/providers";

  constructor(private http: HttpClient) { }

  getProviders(){
    return this.http.get<ProvidersM[]>(this.url);
  }

  getProductProvider(providerId : number) : Product[] | undefined{
    return products.filter(p=> p.provider.id === providerId);
  }

  


}
