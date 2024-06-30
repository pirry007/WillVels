import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CartProductsComponent } from '../../components/cart-products/cart-products.component';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HeaderComponent, CartProductsComponent, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {  
  private CartService = inject(CartService);
  private Router = inject(Router);

  products = this.CartService.products;

  paymentDetails = new FormGroup({
    direccion: new FormControl(""),
    ciudad: new FormControl(""),
    departamento: new FormControl(""),
    paymentMethod: new FormControl("")
  })

  OnSubmit(){
    if(this.products().size >= 1 && this.paymentDetails.valid){
      this.CartService.createOrder(this.paymentDetails.value)
      .subscribe({
        next: () => this.Router.navigate(["/thanks"]) 
      })
    }
  }
}
