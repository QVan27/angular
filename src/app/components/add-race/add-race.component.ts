import { RaceService } from './../../services/race/race.service';
import { Component, OnInit } from '@angular/core';
import { Race } from '../../race';
import { RACES } from '../../mock/mock-races';
import { Pony } from '../../pony';
import { PONIES } from '../../mock/mock-ponies';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css'],
})
export class AddRaceComponent implements OnInit {
  model: Race = new Race();
  poniesBool = Array<boolean>();
  allPonies = PONIES;

  newRace: Race = new Race();

  raceAdded: boolean = false;

  raceForm = this.fb.group({
    location: ['entrer le nom', Validators.required],
    date: [new Date(), Validators.required],
    
  });

  constructor(private fb: FormBuilder, private racesService: RaceService) {}

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
