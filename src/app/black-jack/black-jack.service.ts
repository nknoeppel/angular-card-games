import { Injectable } from '@angular/core';
import { BlackJackSettings } from './models/game-settings.model';

@Injectable()
export class BlackJackService {
    settings: BlackJackSettings;
}