import { Deck } from './deck';
import { Dealer } from './dealer.model';
import { Player } from './player.model';
import { Hand } from './hand.model';
import { BlackJackSettings } from './game-settings.model';

export class Game {

    deck = new Deck();
    dealer = new Dealer();
    players: Player[] = [];

    constructor(private settings: BlackJackSettings) {
        this.deck.shuffle();
        for (let i = 0; i < this.settings.numPlayers; i++) {
            this.players.push(new Player(this.settings));
        }
        this.dealHands();
    }

    startGameFromCurrentDeck() {
        this.dealer.hand = new Hand(this.settings);
        this.players.forEach((p) => {
            p.hands = [];
            p.hands.push(new Hand(this.settings));
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
    }
}