import { Card, Suit } from './card.model';

export class Deck {
    cards: Card[] = [];

    constructor(private numberOfDecks: number) {
        this.createDeck();
        console.log('cards in deck', this.cards);
    }

    createDeck() {
        for (let d = 0; d < this.numberOfDecks; d++) {
            [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE].forEach((value, idx) => {
                for (let i = 1; i <= 13; i++) {
                    this.cards.push(new Card(i, <Suit>value));
                }
            });
        }
    }

    shuffle() {
        let m = this.cards.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
        }
    }

    dealCard() {
        return this.cards.splice(0, 1)[0];
    }
}