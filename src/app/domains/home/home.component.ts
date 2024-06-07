import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private productService = inject(ProductService)

  products = signal<any>([])

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products.set(response)
        console.log(response)
      }
    })
  }
}
