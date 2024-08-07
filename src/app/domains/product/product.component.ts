import { Component, Input, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CurrencyPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() id?: string;
  
  private cartService = inject(CartService)
  private productsService = inject(ProductsService)
  
  product = signal<any| Product>(null)
  
  ngOnInit(){
    if (this.id !== undefined) {
      this.productsService.getProductById(this.id).subscribe({
        next: (response)=>{
          this.product.set(response)
        }, error: (error)=>console.log(error)
      })
    }
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}

