import { Component, OnInit, Input } from '@angular/core';
import { Suit } from '../../models/card.model';

@Component({
  selector: 'app-suit-icon',
  templateUrl: './suit-icon.component.html',
  styleUrls: ['./suit-icon.component.css']
})
export class SuitIconComponent implements OnInit {

  @Input() suit: Suit;
  @Input() size: string;
  SUIT = Suit;

  constructor() { }

  ngOnInit() {
  }

}
