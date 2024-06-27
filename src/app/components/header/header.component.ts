import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule, CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
private cartService = inject(CartService)
private userService = inject(UserService)
private authService = inject(AuthService)
private router = inject(Router)


  showCart = signal(false);

  toggleShowCart(){
    this.showCart.update(prevState => !prevState);
  }

  isLogged(){
    return this.userService.isLogged();
  }

  logout(){
    this.authService.removeToken();
    this.router.navigate(["/login"])
  }
}
