import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);
  products = signal(new Map());

  total = computed(() => {
    const productsMap = this.products();
    let total = 0;

    productsMap.forEach((product) => {
      total += product.size[0].price * product.quantity;
    });

    return total;
  });

  constructor() {}

  saveCart() {
    const productsArray = Array.from(this.products().entries());
    localStorage.setItem('products', JSON.stringify(productsArray));
  }

  loadCart() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      const productsArray = JSON.parse(savedProducts);
      const productsMap = new Map(productsArray);
      this.products.set(productsMap);
    }
  }

  addToCart(product: Product) {
    this.products.update((productsMap) => {
      const productInCart = productsMap.get(product._id);
      if (productInCart) {
        productsMap.set(product._id, {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
      } else {
        productsMap.set(product._id, { ...product, quantity: 1 });
      }
      return new Map(productsMap);
    });
  }

  incrementQuantity(productId: String) {
    this.products.update((productsMap) => {
      const productInCart = productsMap.get(productId);

      if (productInCart) {
        productsMap.set(productId, {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
      }
      return new Map(productsMap);
    });
  }

  decrementQuantity(productId: String) {
    this.products.update((productsMap) => {
      const productInCart = productsMap.get(productId);

      if (productInCart!.quantity === 1) {
        productsMap.delete(productId);
      } else {
        productsMap.set(productId, {
          ...productInCart!,
          quantity: productInCart!.quantity - 1,
        });
      }
      return new Map(productsMap);
    });
  }

  deleteProduct(productId: String) {
    this.products.update((productsMap) => {
      productsMap.delete(productId);
      return new Map(productsMap);
    });
  }

  createOrder(formData: any) {
    const mapToArray = Array.from(this.products().values());
    const productsArray = mapToArray.map((product) => {
      return { productId: product._id, quantity: product.quantity };
    });

    return this.http.post(
      'http://3.144.211.216:3000/api/purchases',
      {
        products: productsArray,
        total: this.total(),
        name: formData.name,
        lastname: formData.lastname,
        address: formData.address,
        apto: formData.apto,
        city: formData.city,
        department: formData.department,
        paymentMethod: formData.paymentMethod,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
          content_type: 'application/json',
        }),
      }
    );
  }
}
