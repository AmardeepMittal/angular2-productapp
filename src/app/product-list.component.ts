


import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "app/product-list.service";
import { Product } from "app/app.models";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";

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
    errormsg: string ;

    constructor( private cdRef: ChangeDetectorRef,
        private productService: ProductService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.showImages = true;
        this.pageTitle = "Acme Product List";
        

        let id = +this.route.snapshot.params['categoryId'];
        if(id)
        {
            this.productService.getProductsByCat(id).subscribe(result => this.products = result);
        }
        else{
            this.productService.getProducts().subscribe( (result : Product[]) => {
            this.products = result     
            //this.cdRef.detectChanges();       
            }, error => console.log('Error has occured !') );
        }
        console.log(JSON.stringify(this.products))
    }

    //  handleError( error: Response){
    //     console.log("An Error has occured");
    //     return Observable.throw(error.json().error || "server error"   );
    // }

    toggleImages(): void{
        this.showImages = !this.showImages;
    }

    onNotify(value: string){
        this.pageTitle = " Product "+ value;
    }
}