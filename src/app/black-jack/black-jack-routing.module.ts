import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'play',
        component: GameComponent
    },
    {
        path: '**',
        redirectTo: 'settings'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlackJackRoutingModule { }
