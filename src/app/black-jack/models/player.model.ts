import { Card } from '../../shared/card/card.model';
import { Hand } from './hand.model';

export class Player {
    hands: Hand[];

    constructor() {
        this.hands = [];
    }

    dealCard(hand: number, card: Card) {
        if (!this.hands[hand]) {
            this.hands[hand] = new Hand();
        }
        this.hands[hand].dealCard(card);
    }
}