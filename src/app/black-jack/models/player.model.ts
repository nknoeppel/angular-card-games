import { Card } from '../../shared/card/card.model';
import { Hand } from './hand.model';
import { BlackJackSettings } from './game-settings.model';

export class Player {
    hands: Hand[];

    constructor(private settings: BlackJackSettings) {
        this.hands = [];
    }

    dealCard(hand: number, card: Card) {
        if (!this.hands[hand]) {
            this.hands[hand] = new Hand(this.settings);
        }
        this.hands[hand].dealCard(card);
    }
}