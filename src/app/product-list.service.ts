


import { Injectable } from "@angular/core";
import { Product, Category } from "app/app.models";
import { PRODUCTS, CATEGORIES } from "app/mockdata";
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/Rx'; 

@Injectable()
export class ProductService {

    private _url ='/api/products/products.json';
    products: Product[] = null;

    constructor(private _http:Http ){   
    }

    getProducts(): Observable<Product[]> {
         return this._http.get(this._url)
                 .map((resp: Response) =>  <Product[]>resp.json()  );
                 //.delay(7000);

        // return new Observable<Product[]>(subscriber => {
        //     setTimeout(
        //         () => {
        //             this._http.get(this._url)
        //             .map((resp: Response) =>  <Product[]>resp.json()  );
        //         }, 2000)
        // });

        //.do( data => console.log(JSON.stringify(data)) )
    //.catch(this.handleError);
        //.subscribe( products => this.products = products, error => this.handleError(error) )
        
        //return this.products;
    }

    handleError( error: Response){
        console.log("An Error has occured");
        //return Observable.throw(error.json().error || "server error"   );
    }

    getProductById(id: number){
        return PRODUCTS.find( x => x.id === id);
    }

    getProductsByCat(id: number) : Observable<Product[]>{
        let category: Category = this.getCategoryName(id);
       return this.getProducts()
                .concatMap( x => Observable.from(x))
                .filter( x => x.category === category.name)
                .toArray();
    }

    getCategoryName(id: number){
        return CATEGORIES.find( x => x.id === id);
    }

}