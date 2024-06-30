import { CurrencyPipe } from '@angular/common';
import { Component, Inject, Input, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CurrencyPipe, RouterLinkWithHref],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  
  private productService = Inject(ProductsService)
  private cartService = Inject(CartService);

  product = signal<Product[]>([])
 
  @Input() titulo: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;

  addToCart(product: any){
    this.cartService.addToCart(product);
  }
}
