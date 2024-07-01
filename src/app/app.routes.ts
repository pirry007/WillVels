import { Routes } from '@angular/router';
import { CatalogueComponent } from './domains/catalogue/catalogue.component';
import { HomeComponent } from './domains/home/home.component';
import { CheckoutComponent } from './domains/checkout/checkout.component';
import { ProductComponent } from './domains/product/product.component';
import { LoginComponent } from './domains/login/login.component';
import { RegisterComponent } from './domains/register/register.component';
import { redirectIfLogged } from './guards/redirectLogged.guard';

export const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'login', component: LoginComponent, canActivate:[redirectIfLogged] },
  { path: 'register', component: RegisterComponent, canActivate: [redirectIfLogged]},
  { path: 'checkout', component: CheckoutComponent, canActivate: [redirectIfLogged]},
];
