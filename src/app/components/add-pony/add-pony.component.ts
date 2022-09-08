import { Component, OnInit } from '@angular/core';
import { Pony } from '../../pony';
import { PONIES } from '../../mock/mock-ponies';

@Component({
  selector: 'add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css'],
})
export class AddPonyComponent implements OnInit {
  newPony: Pony = new Pony();

  constructor() {
    // call once
    this.newPony = new Pony(0, 'nom', 'et sa couleur', 0);
  }

  ngOnInit(): void {
    // call on each refresh
    this.newPony = new Pony(0, 'entrer un nom', 'et sa couleur', 0);
  }

  onSubmit() {
    console.log('toto');
    this.newPony.id = PONIES.length;
    PONIES.push(this.newPony);
    // fuck les pointeurs, il faut casser le lien entre ce
    // putain de poney et le poney du tableau
    this.newPony = new Pony();
  }
}
