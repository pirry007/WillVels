import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { CartProductsComponent } from '../cart-products/cart-products.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule, CurrencyPipe, CartProductsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
private cartService = inject(CartService)
private userService = inject(UserService)
private authService = inject(AuthService)
private router = inject(Router)

cart = this.cartService.products;
total = this.cartService.total;

  showCart = false;

  toggleShowCart(){
    this.showCart = !this.showCart
  }

  isLogged(){
    return this.userService.isLogged();
  }

  logout(){
    this.authService.removeToken();
    alert('has cerrado sesion')
    this.router.navigate(["/login"])
  }
}
