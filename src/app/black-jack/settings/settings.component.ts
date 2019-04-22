import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlackJackService } from '../black-jack.service';
import { BlackJackSettings } from '../models/game-settings.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  numDecks = 1;
  numPlayers = 1;
  canResplitAces = false;
  isPlaying = false;

  constructor(private blackjackService: BlackJackService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  play() {
    this.blackjackService.settings = new BlackJackSettings();
    this.blackjackService.settings.numDecks = this.numDecks;
    this.blackjackService.settings.numPlayers = this.numPlayers;
    this.blackjackService.settings.allowResplitAces = this.canResplitAces;
    this.router.navigate(['../play'], { relativeTo: this.route });
  }

}
