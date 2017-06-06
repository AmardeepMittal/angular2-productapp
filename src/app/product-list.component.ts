


import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/product-list.service";
import { Product } from "app/app.models";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];
    pageTitle: string;

    constructor(private productService: ProductService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.pageTitle = "Acme Product List";
        this.products = this.productService.getProducts();
        let id = +this.route.snapshot.params['categoryId'];
        if(id)
        {
            this.products = this.productService.getProductsByCat(id);
        }
    }
}