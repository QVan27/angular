import { RaceService } from './../../services/race/race.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PONIES } from 'src/app/mock/mock-ponies';
import { RACES } from 'src/app/mock/mock-races';
import { Race } from 'src/app/race';

@Component({
  selector: 'add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css'],
})
export class AddRaceComponent implements OnInit {
  model: Race = new Race();
  poniesBool = Array<boolean>();
  allPonies = PONIES;
  update: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private raceS: RaceService
  ) {}

  ngOnInit(): void {
    for (let p of this.allPonies) {
      this.poniesBool.push(false);
    }
  }

  onSubmit(): void {
    for (let index = 0; index < this.poniesBool.length; index++) {
      if (this.poniesBool[index]) {
        this.model.ponies.push(this.allPonies[index]);
      }
    }
    RACES.push(this.model);
    this.model = new Race();
  }
}
