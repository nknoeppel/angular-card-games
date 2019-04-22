import { Injectable } from '@angular/core';
import { BlackJackSettings } from './models/game-settings.model';
import { Subject } from 'rxjs';
import { Card } from '../shared/card/card.model';

@Injectable()
export class BlackJackService {
    settings: BlackJackSettings;

    private deckSubject = new Subject<Card>();
    nextCard$ = this.deckSubject.asObservable();

    dealCard(card: Card) {
        this.deckSubject.next(card);
    }
}