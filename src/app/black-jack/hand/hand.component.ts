import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hand } from '../models/hand.model';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() hand: Hand;
  @Input() isPlaying = false;
  @Output() onHit = new EventEmitter();
  @Output() onSplit = new EventEmitter();
  @Output() onStand = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
