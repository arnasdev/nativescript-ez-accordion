import { Component, OnInit } from "@angular/core";
import * as utils from "utils/utils"

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    openURL() {
        utils.openUrl("https://www.github.com/arnasdev/ns-ez-accordion");
    }
}
