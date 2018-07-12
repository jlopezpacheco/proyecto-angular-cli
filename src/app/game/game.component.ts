import { Component } from '@angular/core';
import { Game } from '../models/game';

@Component({
	selector: 'game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})

export class GameComponent {

	gamesPs4:Array<Game>;
	gamesXbox:Array<Game>;
	gamesWii:Array<Game>;

	mostrarListaJuegos:string;

	constructor(){
		this.mostrarListaJuegos = 'all';

		//Games PS4
		this.gamesPs4 = [
			new Game('God Of War 4', 'SCE Santa Monica Studio', 'PlayStation 4', 2018, false),
			new Game('The Last Of Us II', 'Naughty Dog', 'PlayStation 4', 2019, false),
			new Game('Detroit Become Human', 'Quantic Dream', 'PlayStation 4', 2018, false)
			];

		//Games XBOX
		this.gamesXbox = [
			new Game('Halo 5: Guardians', '343 Industries', 'Xbox One', 2015, true),
			new Game('Quantum Break', 'Remedy Entertainment', 'Xbox One', 2016, false),
			new Game('Gears of War 4', 'The Coalition', 'Xbox One', 2016, true)
		];

		//Games WII
		this.gamesWii = [
			new Game('Wii Sports', 'Nintendo, Nintendo Entertainment Analysis and Development', 'Wii', 2006, false),
			new Game('The Legend of Zelda: Twilight Princess', 'Nintendo Entertainment Analysis and Development', 'Wii', 2006, false),
			new Game('Mario Kart Wii', 'Nintendo, Nintendo Entertainment Analysis and Development', 'Wii', 2008, true)
		];
	}

	ngOnInit(){
		console.log(this.gamesPs4[0].nombre);
	}

	cambiarLista(plataforma){
		this.mostrarListaJuegos = plataforma;
	}
}