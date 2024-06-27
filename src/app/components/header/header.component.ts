import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../../services/cart.service.ts.service';
import { UserService } from '../../services/user.service.ts.service';
import { AuthService } from '../../services/auth.service.ts.service';

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
    return this.userService.islogged();
  }

  logout(){
    this.authService.removeToken();
    this.router.navigate(["/login"])
  }
}
