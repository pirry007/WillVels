import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  constructor() {}

  getProducts(){
    return this.http.get('http://localhost:3000/api/products')
  }

  
  getProductById(id: number){
    return this.http.get('http://localhost:3000/api/products/:id')
  }

}
