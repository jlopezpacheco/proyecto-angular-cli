import { Component } from '@angular/core';
import { Game } from '../models/game';

@Component({
	selector: 'game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})

export class GameComponent{

	gamesPs4:Array<Game>;
	gamesXbox:Array<Game>;
	gamesWii:Array<Game>;
	gamesAll:Array<Game>;

	mostrarListaJuegos:string;

	constructor(){
		this.mostrarListaJuegos = 'all';

		//Games PS4
		this.gamesPs4 = [
			new Game('http://www.laps4.com/photoplog/images/229358/medium/1_DCLNkCmXcAEggBt.jpg', 'God Of War 4', 'SCE Santa Monica Studio', 'PlayStation 4', 2018, false),
			new Game('https://uvejuegos.com/img/caratulas/58285/last2.jpg', 'The Last Of Us II', 'Naughty Dog', 'PlayStation 4', 2019, false),
			new Game('https://uvejuegos.com/img/caratulas/56085/detroit-become-human-cover.jpg', 'Detroit Become Human', 'Quantic Dream', 'PlayStation 4', 2018, false)
			];

		//Games XBOX
		this.gamesXbox = [
			new Game('https://media.vandal.net/m/21307/halo-5-guardians-20151023123031_1.jpg', 'Halo 5: Guardians', '343 Industries', 'Xbox One', 2015, true),
			new Game('https://farm2.staticflickr.com/1661/25978235700_88541654bf_o.jpg', 'Quantum Break', 'Remedy Entertainment', 'Xbox One', 2016, false),
			new Game('https://media.vandal.net/m/23857/gears-of-war-4-201676102343_2.jpg', 'Gears of War 4', 'The Coalition', 'Xbox One', 2016, true)
		];

		//Games WII
		this.gamesWii = [
			new Game('https://art.gametdb.com/wii/cover/US/RSPE01.png', 'Wii Sports', 'Nintendo, Nintendo Entertainment Analysis and Development', 'Wii', 2006, false),
			new Game('https://vignette.wikia.nocookie.net/awesome-games/images/b/b6/60566_front.jpg/revision/latest?cb=20151027223135', 'The Legend of Zelda: Twilight Princess', 'Nintendo Entertainment Analysis and Development', 'Wii', 2006, false),
			new Game('https://media.vandal.net/m/5195/200976192840_1.jpg', 'Mario Kart Wii', 'Nintendo, Nintendo Entertainment Analysis and Development', 'Wii', 2008, true)
		];

		//ALL Games
		this.gamesAll = [
			new Game('http://www.laps4.com/photoplog/images/229358/medium/1_DCLNkCmXcAEggBt.jpg', 'God Of War 4', 'SCE Santa Monica Studio', 'PlayStation 4', 2018, false),
			new Game('https://uvejuegos.com/img/caratulas/58285/last2.jpg', 'The Last Of Us II', 'Naughty Dog', 'PlayStation 4', 2019, false),
			new Game('https://uvejuegos.com/img/caratulas/56085/detroit-become-human-cover.jpg', 'Detroit Become Human', 'Quantic Dream', 'PlayStation 4', 2018, false),
			new Game('https://media.vandal.net/m/21307/halo-5-guardians-20151023123031_1.jpg', 'Halo 5: Guardians', '343 Industries', 'Xbox One', 2015, true),
			new Game('https://farm2.staticflickr.com/1661/25978235700_88541654bf_o.jpg', 'Quantum Break', 'Remedy Entertainment', 'Xbox One', 2016, false),
			new Game('https://media.vandal.net/m/23857/gears-of-war-4-201676102343_2.jpg', 'Gears of War 4', 'The Coalition', 'Xbox One', 2016, true),
			new Game('https://art.gametdb.com/wii/cover/US/RSPE01.png', 'Wii Sports', 'Nintendo, Nintendo Entertainment Analysis and Development', 'Wii', 2006, false),
			new Game('https://vignette.wikia.nocookie.net/awesome-games/images/b/b6/60566_front.jpg/revision/latest?cb=20151027223135', 'The Legend of Zelda: Twilight Princess', 'Nintendo Entertainment Analysis and Development', 'Wii', 2006, false),
			new Game('https://media.vandal.net/m/5195/200976192840_1.jpg', 'Mario Kart Wii', 'Nintendo, Nintendo Entertainment Analysis and Development', 'Wii', 2008, true)
		];
	}

	ngOnInit(){
		//console.log(this.gamesPs4[0].nombre);
	}

	cambiarLista(plataforma){
		this.mostrarListaJuegos = plataforma;
	}
}