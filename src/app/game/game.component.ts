import { Component } from '@angular/core';

@Component({
	selector: 'game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})

export class GameComponent {
	
	public games: string[] = ["God of War 4", "The Last Of Us II", "Fortnite Battle Royale", "Rocket League"];
}