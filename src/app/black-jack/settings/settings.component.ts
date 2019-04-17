import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlackJackService } from '../black-jack.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  numDecks = 1;
  isPlaying = false;

  constructor(private blackjackService: BlackJackService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  play() {
    this.blackjackService.numDecks = this.numDecks;
    this.router.navigate(['../play'], { relativeTo: this.route });
  }

}
