import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	standalone: false,
	styleUrl: './card.css',
	templateUrl: './card.html',
})
export class Card implements OnInit{
	@Input()
	gameCover:string=""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string = "Digital PS4"
	@Input()
	gamePrice:string = "R$349,99"
	constructor(){}

	ngOnInit(): void {

	}

}
