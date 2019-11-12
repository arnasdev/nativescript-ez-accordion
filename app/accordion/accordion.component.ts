import { Component, OnInit } from "@angular/core";
import { trigger, state, transition, animate, style } from "@angular/animations";

import { Vehicle } from "./vehicle.model";

@Component({
	selector: "ns-ez-accordion",
	moduleId: module.id,
	templateUrl: "./accordion.component.html",
	styleUrls: ['./accordion.component.css'],
	animations: [
		AccordionComponent.createTrigger()
	]
})
export class AccordionComponent {

	public vehicles: Vehicle[] =
		[
			{ manufacturer: "Audi", model: "A4", registration: "09-D-9613" },
			{ manufacturer: "Toyota", model: "Yaris", registration: "01-LM-17421" },
			{ manufacturer: "Ford", model: "Fiesta", registration: "05-C-6412" },
			{ manufacturer: "BMW", model: "M3", registration: "191-D-9822" },
			{ manufacturer: "Opel", model: "Astra", registration: "97-D-78239" },
		];

	current: any;
	multi: boolean = false;
	static rowHeight: number = 160;

	getRowHeight() {
		return AccordionComponent.rowHeight;
	}

	changeState(obj) {
		if (this.multi === false) {
			if (this.current === undefined) {
				this.current = obj;
			}
			else if (obj !== this.current) {
				this.current.state = 'inactive';
			}
		}

		let state = obj.state;
		state = state === 'active' ? 'inactive' : 'active';
		obj.state = state;
		this.current = obj;
	}

	static createTrigger() {
		return trigger('state', [
			state("inactive", style({ "height": "0px" })),
			state("active", style({ "height": AccordionComponent.rowHeight + "px" })),
			transition("inactive => active", [animate("200ms ease-out")]),
			transition("active => inactive", [animate("200ms ease-out")])
		]);
	}
}