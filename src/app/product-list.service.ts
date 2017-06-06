


import { Injectable } from "@angular/core";
import { Product, Category } from "app/app.models";
import { PRODUCTS, CATEGORIES } from "app/mockdata";

@Injectable()
export class ProductService {

    getProducts(): Product[] {
        return PRODUCTS;
    }

    getProductsByCat(id: number) : Product[]{
        let category: Category = this.getCategoryName(id);
       return this.getProducts().filter( x => x.category === category.name)
    }

    getCategoryName(id: number){
        return CATEGORIES.find( x => x.id === id);
    }

}