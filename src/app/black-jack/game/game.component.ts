import { Component, OnInit } from '@angular/core';
import { Suit } from '../../shared/card/card.model';
import { Game } from '../models/game.model';
import { Hand } from '../models/hand.model';
import { BlackJackService } from '../black-jack.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  SUIT = Suit;
  game: Game;

  gameStarted = false;

  currentPlayerIndex = 0;
  currentHandIndex = 0;
  isDealerTurn = false;
  isDealerDone = false;

  constructor(private blackjackService: BlackJackService) { }

  get currentHand(): Hand {
    return this.game.players[this.currentPlayerIndex].hands[this.currentHandIndex];
  }

  get currentPlayer(): Player {
    return this.game.players[this.currentPlayerIndex];
  }

  ngOnInit() {
    console.log('num players:', this.blackjackService.settings.numPlayers);
    this.startNewGame();
  }

  startNewGame() {
    this.gameStarted = false;
    this.currentPlayerIndex = 0;
    this.currentHandIndex = 0;
    this.isDealerTurn = false;
    this.isDealerDone = false;
    this.game = new Game(this.blackjackService.settings);
    console.log(this.game);
    this.gameStarted = true;
    this.playHand();
  }

  startGame() {
    this.gameStarted = false;
    this.currentPlayerIndex = 0;
    this.currentHandIndex = 0;
    this.isDealerTurn = false;
    this.isDealerDone = false;
    this.game.startGameFromCurrentDeck();
    this.gameStarted = true;
    this.playHand();
  }

  currentHandNeedsUserInput() {
    return this.currentHand.handValue < 21;
  }

  playHand() {
    if (this.currentHandIndex > this.currentPlayer.hands.length - 1) {
      this.currentPlayerIndex++;
      this.currentHandIndex = 0;
    }

    if (this.currentPlayerIndex > this.game.players.length - 1) {
      this.playDealerHand();
    }
    else {
      if (!this.currentHandNeedsUserInput()) {
        this.currentHandIndex++;
        this.playHand();
      }
    }
  }

  hit() {
    this.currentHand.dealCard(this.game.deck.dealCard());
    this.playHand();
  }

  stay() {
    this.currentHandIndex++;
    this.playHand();
  }

  split() {
    //create new hand
    const newHand = new Hand(this.blackjackService.settings);
    newHand.isSplit = true;
    newHand.dealCard(this.currentHand.cards.splice(1, 1)[0]);

    if (this.currentHandIndex === this.currentPlayer.hands.length - 1) {
      //if player is playing their last hand just push
      this.currentPlayer.hands.push(newHand);
    }
    else {
      //if player is not playing last hand, put new hand in correct spot
      this.currentPlayer.hands.splice(this.currentHandIndex + 1, 0, newHand);
    }

    //hit first hand of split to preserve deal order
    this.currentHand.isSplit = true;
    this.hit();

    //deal second card for new hand
    newHand.dealCard(this.game.deck.dealCard());
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
