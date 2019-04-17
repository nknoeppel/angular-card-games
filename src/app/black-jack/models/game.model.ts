import { Deck } from './deck';
import { Dealer } from './dealer.model';
import { Player } from './player.model';
import { Hand } from './hand.model';

export class Game {

    deck = new Deck();
    dealer = new Dealer();
    players: Player[] = [];

    constructor(numberOfPlayers: number) {
        this.deck.shuffle();
        for (let i = 0; i < numberOfPlayers; i++) {
            this.players.push(new Player());
        }
        this.dealHands();
    }

    startGameFromCurrentDeck() {
        this.dealer.hand = new Hand();
        this.players.forEach((p) => {
            p.hands = [];
            p.hands.push(new Hand());
        });
        this.dealHands();
    }

    private dealHands() {
        for (let i = 1; i <= 2; i++) {

            this.dealer.dealCard(this.deck.dealCard());

            for (let p = 0; p < this.players.length; p++) {
                this.players[p].dealCard(0, this.deck.dealCard());
            }
        }

        console.log(this.dealer);
        console.log(this.players);
        console.log(this.deck);
    }
}