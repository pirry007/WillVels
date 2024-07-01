import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-products',
  standalone: true,
  imports: [CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css'
})
export class CartProductsComponent {
 private cartService = inject(CartService);
  @Input() product: any

  productQuantity = new FormControl(0);

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges){
    if(changes['product'] && this.product){
      this.productQuantity.setValue(this.product.quantity);
    }
  }

  increment(productId: String){
    this.cartService.incrementQuantity(productId);
  }

  decrement(productId: String){
    this.cartService.decrementQuantity(productId);
  }

  delete(productId: String){
    this.cartService.deleteProduct(productId)
  }
}
