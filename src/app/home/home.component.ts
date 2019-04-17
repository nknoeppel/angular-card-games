import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameTypes, GameType } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameTypes = GameTypes;
  gameType = this.gameTypes[0];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  play() {
    this.router.navigate([this.gameType.url]);
  }

}
