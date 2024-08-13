import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CartProductsComponent } from '../../components/cart-products/cart-products.component';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HeaderComponent,
            CartProductsComponent,
            ReactiveFormsModule,
            CurrencyPipe,
            MatFormFieldModule,
            MatInputModule,
            FormsModule
          ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  private CartService = inject(CartService);
  private Router = inject(Router);

  products = this.CartService.products;
  total = this.CartService.total;

  paymentDetails = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    address: new FormControl(""),
    apto: new FormControl(""),
    city: new FormControl(""),
    department: new FormControl(""),
    paymentMethod: new FormControl("")
  })

  OnSubmit(){
    if(this.products().size >= 1 && this.paymentDetails.valid){
      this.CartService.createOrder(this.paymentDetails.value)
      .subscribe({
        next: () => this.Router.navigate([""])
      })
    } else {
      alert("No se puede completar la compra, revise los campos");
    }
  }
}
