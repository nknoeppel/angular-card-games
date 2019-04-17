import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { CoreModule } from '../core/core.module';
import { CardModule } from '../shared/card/card.module';
import { BlackJackRoutingModule } from './black-jack-routing.module';
import { BlackJackService } from './black-jack.service';

@NgModule({
  declarations: [
    SettingsComponent,
    GameComponent
  ],
  imports: [
    BlackJackRoutingModule,
    CoreModule,
    CardModule
  ],
  providers: [BlackJackService]
})
export class BlackJackModule { }
