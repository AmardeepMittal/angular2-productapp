

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home.component";
import { NgModule } from "@angular/core";
import { ProductListComponent } from "app/product-list.component";
import { ProductDetailComponent } from "app/product-detail.component";

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'products', component: ProductListComponent},
    {path: 'products/:categoryId', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule{
}
