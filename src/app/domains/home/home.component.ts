import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductsService } from '../../services/products.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CardProductComponent,RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private productsService = inject(ProductsService)

  products = signal<any>([])

  ngOnInit(){
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products.set(response)
        console.log(response)
      }
    })
  }
}
