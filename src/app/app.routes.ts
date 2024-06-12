import { Routes } from '@angular/router';
import { CatalogueComponent } from './domains/catalogue/catalogue.component';
import { HomeComponent } from './domains/home/home.component';
import { ProductComponent } from './domains/product/product.component';
import { LoginComponent } from './domains/login/login.component';
import { RegisterComponent } from './domains/register/register.component';

export const routes: Routes = [
    {path: "catalogue", component: CatalogueComponent},
    {path: "", component: HomeComponent},
    {path: "product", component: ProductComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent}
];
