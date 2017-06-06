

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home.component";
import { NgModule } from "@angular/core";
import { ProductListComponent } from "app/product-list.component";

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'products', component: ProductListComponent},
    {path: 'products/:categoryId', component: ProductListComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule{
}
