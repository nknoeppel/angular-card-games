import { Component, OnInit } from '@angular/core';
import { Suit } from '../../shared/card/card.model';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  SUIT = Suit;
  game: Game;

  gameStarted = false;

  currentPlayer = 0;
  currentHand = 0;
  isDealerTurn = false;
  isDealerDone = false;

  constructor() { }

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    this.gameStarted = false;
    this.currentPlayer = 0;
    this.currentHand = 0;
    this.isDealerTurn = false;
    this.isDealerDone = false;
    this.game = new Game(3);
    this.gameStarted = true;
    this.playHand();
  }

  startGame() {
    this.gameStarted = false;
    this.currentPlayer = 0;
    this.currentHand = 0;
    this.isDealerTurn = false;
    this.isDealerDone = false;
    this.game.startGameFromCurrentDeck();
    this.gameStarted = true;
    this.playHand();
  }

  currentHandNeedsUserInput() {
    return this.game.players[this.currentPlayer].hands[this.currentHand].handValue < 21;
  }

  playHand() {
    if (this.currentHand > this.game.players[this.currentPlayer].hands.length - 1) {
      this.currentPlayer++;
      this.currentHand = 0;
    }

    if (this.currentPlayer > this.game.players.length - 1) {
      this.playDealerHand();
    }
    else {
      if (!this.currentHandNeedsUserInput()) {
        this.currentHand++;
        this.playHand();
      }
    }
  }

  hit() {
    this.game.players[this.currentPlayer].dealCard(this.currentHand, this.game.deck.dealCard());
    this.playHand();
  }

  stay() {
    this.currentHand++;
    this.playHand();
  }

  split() {

  }

  playDealerHand() {
    this.isDealerTurn = true;
    this.game.dealer.hand.cards.forEach((c) => { c.isHole = false; });
    while (this.game.dealer.hand.handValue < 17) {
      this.game.dealer.dealCard(this.game.deck.dealCard())
    }
    this.isDealerDone = true;
  }
}
