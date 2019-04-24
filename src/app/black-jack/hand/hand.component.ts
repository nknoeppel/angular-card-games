import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Hand } from '../models/hand.model';
import { Subscription } from 'rxjs';
import { BlackJackService } from '../black-jack.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit, OnDestroy {

  @Input() hand: Hand;
  @Input() isPlaying = false;
  @Input() numPlayerHands: number;
  @Output() onHit = new EventEmitter();
  @Output() onSplit = new EventEmitter();
  @Output() onStand = new EventEmitter();

  gameOverSubscription: Subscription;
  gameOver = false;
  dealerHand: number;

  constructor(private blackjackService: BlackJackService) { }

  ngOnInit() {
    this.gameOverSubscription = this.blackjackService.gameOver$
      .subscribe(
        (over: number) => {
          this.dealerHand = over;
        }
      )
  }

  ngOnDestroy() {
    this.gameOverSubscription.unsubscribe();
  }

}
