import { Routes } from '@angular/router';
import { CatalogueComponent } from './domains/catalogue/catalogue.component';
import { HomeComponent } from './domains/home/home.component';
import { ProductComponent } from './domains/product/product.component';

export const routes: Routes = [
    {path: "catalogue", component: CatalogueComponent},
    {path: "", component: HomeComponent},
    {path: "product", component: ProductComponent}
];
