

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ai-star',
    templateUrl: './start.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
       
    starWidth: number;
    @Input()rating: number;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    // Only occurs/ watches when the input properties changes
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(){
        this.notify.emit(`Rating value ${this.rating} has been clicked`)
    }


}