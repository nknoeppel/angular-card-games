export enum Suit {
    SPADE = 1,
    CLUB = 2,
    HEART = 3,
    DIAMOND = 4
}

export class Card {
    Suit: Suit;
    cardNumber: number;
    isHole = false;

    constructor(number: number, suit: Suit) {
        this.cardNumber = number;
        this.Suit = suit;
    }

    get value(): number[] {
        if (this.cardNumber === 1) {
            return [1, 11];
        }
        else {
            if (this.cardNumber > 10) {
                return [10];
            }
            else {
                return [this.cardNumber];
            }
        }
    }
}