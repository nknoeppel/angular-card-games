import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { CoreModule } from '../core/core.module';
import { CardModule } from '../shared/card/card.module';
import { BlackJackRoutingModule } from './black-jack-routing.module';
import { BlackJackService } from './black-jack.service';
import { GameRouteGuard } from './game/game-route-guard.service';
import { HandComponent } from './hand/hand.component';

@NgModule({
  declarations: [
    SettingsComponent,
    GameComponent,
    HandComponent
  ],
  imports: [
    BlackJackRoutingModule,
    CoreModule,
    CardModule
  ],
  providers: [BlackJackService, GameRouteGuard]
})
export class BlackJackModule { }
