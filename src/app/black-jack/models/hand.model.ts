import { Card } from '../../shared/card/card.model';

export class Hand {
    isSplit: boolean;
    cards: Card[];

    constructor() {
        this.cards = [];
    }

    get isBlackJack() {
        return this.cards.length === 2 && this.handValue === 21;
    }

    get handValue() {
        return this.calculateHandValue(this.cards);
    }

    get numCards() {
        return this.cards.length;
    }

    dealCard(card: Card) {
        this.cards.push(card);
    }

    calculateHandValue(cards: Card[]) {

        if (!cards || cards.length === 0) {
            return 0;
        }

        //corner cases
        if (cards.length === 2) {
            if (cards[0].cardNumber === 1 && cards[1].cardNumber === 1) {
                return 12;
            }
            else {
                if (cards.some(card => card.value.length === 1 && card.value[0] === 10) && cards.some(card => card.cardNumber === 1)) {
                    return 21;
                }
            }
        }

        let value = 0;

        //get all cards that aren't aces
        cards.filter((card) => { return card.value.length === 1 }).forEach((card) => {
            value += card.value[0];
        });

        //see if there are aces and what their value should be
        if (cards.some((card) => card.value.length > 1)) {
            cards.filter((card) => { return card.value.length > 1 }).forEach((card, index) => {
                //basically assumes value only has two possible values but whatever
                value += (value + Math.max(...card.value)) > 21 ? Math.min(...card.value) : Math.max(...card.value);
            });
        }

        return value;
    }
}