import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-label',
	standalone: false,
	styleUrl: './card-label.css',
	templateUrl: './card-label.html',
})
export class CardLabel implements OnInit{

	@Input()
	gameLabel:string=""

	constructor(){ }

	ngOnInit(): void {


	}
}
