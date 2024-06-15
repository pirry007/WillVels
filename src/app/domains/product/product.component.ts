import { Component, Input, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() id?: string;

  private productsService = inject(ProductsService)

  product = signal<any| Product>(null)

  ngOnInit(){
    if (this.id !== undefined) {
      this.product.set(this.productsService.getProductById(Number(this.id)))
    }
  }
}
