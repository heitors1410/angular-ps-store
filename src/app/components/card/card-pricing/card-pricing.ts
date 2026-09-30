import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	standalone: false,
	styleUrl: './card-pricing.css',
	templateUrl: './card-pricing.html',
})
export class CardPricing implements OnInit{
	@Input()
	gameType:string = "Digital PS4"
	@Input()
	gamePrice:string = "R$349,99"

	constructor( ) {}
	ngOnInit(): void {

	}
}
