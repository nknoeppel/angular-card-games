import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { GameRouteGuard } from './game/game-route-guard.service';

const routes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'play',
        canActivate: [GameRouteGuard],
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
