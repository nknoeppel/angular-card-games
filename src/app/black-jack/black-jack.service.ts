import { Injectable } from '@angular/core';
import { BlackJackSettings } from './models/game-settings.model';
import { Subject, of } from 'rxjs';
import { Card } from '../shared/models/card.model';

@Injectable()
export class BlackJackService {
    settings: BlackJackSettings;

    private deckSubject = new Subject<Card>();
    nextCard$ = this.deckSubject.asObservable();

    private gameOverSubject = new Subject<number>();
    gameOver$ = this.gameOverSubject.asObservable();

    private newGameSubject = new Subject<boolean>();
    newGameStarted$ = this.newGameSubject.asObservable();

    dealCard(card: Card) {
        this.deckSubject.next(card);
    }

    gameOver(dealerHandValue: number) {
        this.gameOverSubject.next(dealerHandValue);
    }

    startNewGame() {
        this.newGameSubject.next(true);
    }
}