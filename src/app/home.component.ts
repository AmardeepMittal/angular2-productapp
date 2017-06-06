


import { Component, OnInit } from "@angular/core";
import { CATEGORIES } from "app/mockdata";
import { Category } from "app/app.models";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    categories: Category[];

     ngOnInit(): void {
      this.categories = CATEGORIES;
    }

}