import { Component, OnInit, Input } from '@angular/core';
import { Suit } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() suit: Suit;
  @Input() cardNumber: number;
  @Input() isHole = false;
  @Input() first = false;
  @Input() dealerHand = false;

  SUIT = Suit;

  constructor() { }

  ngOnInit() {
  }

}
