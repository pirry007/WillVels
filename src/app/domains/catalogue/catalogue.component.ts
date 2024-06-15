import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsService } from '../../services/products.service';
import { CardProductComponent } from '../../components/card-product/card-product.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardProductComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  private productsService = inject(ProductsService)

  products = signal<any>([])

  ngOnInit(){
    this.productsService.getProducts().subscribe({
      next: (response)=>{
        this.products.set(response)
      }
    })
  }
}
