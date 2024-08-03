import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  constructor() {}

  getProducts() {
    return this.http.get('http://3.19.221.151:3000/api/products');
  }

  getProductById(id: string) {
    return this.http.get('http://3.19.221.151:3000/api/products/' + id);
  }
}
