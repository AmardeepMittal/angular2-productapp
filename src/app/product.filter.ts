

import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "app/app.models";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
       
        transform(value: Product[], filterBy: string) {
            filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
            return filterBy ? value.filter( x => x.name.toLocaleLowerCase().indexOf(filterBy)> -1)
                            : value;
        }
}