import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CurrencyPipe, RouterLinkWithHref],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input() titulo: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
}
