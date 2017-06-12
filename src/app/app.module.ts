import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from "app/home.component";
import { AppRouterModule } from "app/app.router.module";
import { ProductService } from "app/product-list.service";
import { ProductListComponent } from "app/product-list.component";
import { ProductDetailComponent } from "app/product-detail.component";
import { ProductFilterPipe } from "app/product.filter";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    SharedModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
