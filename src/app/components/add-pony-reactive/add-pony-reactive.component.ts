import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pony } from '../../pony';
import { PonyService } from 'src/app/services/pony/pony.service';

@Component({
  selector: 'add-pony-reactive',
  templateUrl: './add-pony-reactive.component.html',
  styleUrls: ['./add-pony-reactive.component.css'],
})
export class AddPonyReactiveComponent implements OnInit {
  newPony: Pony = new Pony();

  ponyAdded: boolean = false;

  ponyForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    color: ['', Validators.required],
    age: [18, [Validators.required, Validators.min(0), Validators.max(40)]],
  });

  // injecte le formbuilder, IoC (inversion de contrôle)
  // le formbuilder permet de créer le form en ts dans le composant
  constructor(private fb: FormBuilder, private poniesService: PonyService) {}

  ngOnInit(): void {}

  onSubmit() {
    let newPony: Pony = this.ponyForm.value;
    this.poniesService.addPony(newPony);
  }
}
