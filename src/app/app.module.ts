import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from "app/home.component";
import { AppRouterModule } from "app/app.router.module";
import { ProductService } from "app/product-list.service";
import { ProductListComponent } from "app/product-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule

  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
