import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { CoreModule } from '../core/core.module';
import { SolitaireRoutingModule } from './solitaire-routing.module';

@NgModule({
  declarations: [SettingsComponent, GameComponent],
  imports: [
    CoreModule,
    SolitaireRoutingModule
  ]
})
export class SolitaireModule { }
