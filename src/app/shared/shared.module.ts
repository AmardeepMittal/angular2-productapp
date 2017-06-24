
import { NgModule } from "@angular/core";
import { StarComponent } from "app/shared/star.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import './rx.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [StarComponent],
    declarations: [ StarComponent]
})
export class SharedModule{

}