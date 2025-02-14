import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private url = "http://localhost:3000/providers";

  constructor(private http: HttpClient) { }

  


}
