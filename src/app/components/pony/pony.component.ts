import { Component, OnInit, Input } from '@angular/core';
import { Pony } from '../../pony';

@Component({
  selector: 'pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  @Input() pony : Pony = new Pony();

  constructor() { }

  ngOnInit(): void {
  }

}
