import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input() titulo: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
}
