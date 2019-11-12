import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AccordionComponent } from "../accordion/accordion.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AccordionComponent
    ],
    exports: [
        AccordionComponent
    ],
    imports: [
        CommonModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AccordionModule {

}
