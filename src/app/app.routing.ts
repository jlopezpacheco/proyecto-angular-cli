import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { NotFoundComponent } from './404/404.component';

const appRoutes: Routes = [
	{path: '', component: GameComponent},
	{path: 'games', component: GameComponent},
	{path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);