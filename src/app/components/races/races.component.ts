import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/race';

import { RaceService } from './../../services/race/race.service';

@Component({
  selector: 'races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css'],
})
export class RacesComponent implements OnInit {
  races: Race[] = [];

  constructor(private raceService: RaceService) {
    this.raceService.getAll().subscribe((r) => {
      this.races = r;
    });
  }

  ngOnInit(): void {}
}
