
import { Component, OnInit } from "@angular/core";
import { Product } from "app/app.models";
import { ProductService } from "app/product-list.service";
import { ActivatedRoute, } from "@angular/router";
import { Location } from '@angular/common';


@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
       
    product: Product;
    pageTitle: string ;

    constructor(private productService: ProductService, private route: ActivatedRoute,
        private location: Location){

    }

     ngOnInit(): void {
            this.pageTitle = 'Product Detail';
            let id = +this.route.snapshot.params['id'];
            this.product = this.productService.getProductById(id);
        }

    onBack(){
        this.location.back();
    }

}