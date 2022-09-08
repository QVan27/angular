import { Component, OnInit } from '@angular/core';
import { Pony } from '../../pony';
import { PonyService } from '../../services/pony/pony.service';

@Component({
  selector: 'ponies',
  templateUrl: './ponies.component.html',
  styleUrls: [],
})
export class PoniesComponent implements OnInit {
  ponies: Pony[] = [];

  constructor(private ponyService: PonyService) {
    this.ponyService.getAll().subscribe((p) => {
      this.ponies = p;
    });
  }

  ngOnInit(): void {
    console.log('ponies ' + this.ponies);
  }
}
