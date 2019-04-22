import { Card } from '../../shared/card/card.model';
import { Hand } from './hand.model';

export class Dealer {

    hand: Hand;

    constructor() {
        this.hand = new Hand({ allowResplitAces: false });
    }

    dealCard(card: Card) {
        if (this.hand.cards.length === 0) {
            card.isHole = true;
        }
        this.hand.dealCard(card);
    }

    get isBlackJack() {
        return this.hand.isBlackJack;
    }

    get handValue() {
        return this.hand.handValue;
    }

    get showing(): number {
        return this.hand.calculateHandValue(this.hand.cards.filter((card) => { return !card.isHole; }));
    }
}