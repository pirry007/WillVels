import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
