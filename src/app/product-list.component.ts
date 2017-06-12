


import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/product-list.service";
import { Product } from "app/app.models";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'product-list',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    pageTitle: string;
    showImages: boolean;
    listFilter: string;

    constructor(private productService: ProductService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.showImages = true;
        this.pageTitle = "Acme Product List";
        this.products = this.productService.getProducts();
        let id = +this.route.snapshot.params['categoryId'];
        if(id)
        {
            this.products = this.productService.getProductsByCat(id);
        }
    }

    toggleImages(): void{
        this.showImages = !this.showImages;
    }

    onNotify(value: string){
        this.pageTitle = " Product "+ value;
    }
}