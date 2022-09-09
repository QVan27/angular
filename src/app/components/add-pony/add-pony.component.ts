import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pony } from 'src/app/pony';
import { PonyService } from 'src/app/services/pony/pony.service';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css'],
})
export class AddPonyComponent implements OnInit {
  pony: Pony;
  update: boolean = false;

  constructor(
    private router: Router,
    private PonyS: PonyService,
    private route: ActivatedRoute
  ) {
    this.pony = new Pony(0, '', '', 0);
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      if (p['id'] !== undefined) {
        this.update = true;
        this.PonyS.getPony(p['id']).subscribe((pony) => {
          this.pony = pony;
        });
      } else {
        this.pony = new Pony(0, '', '', 0);
      }
    });
  }
 
  onSubmit(): void {
    this.update
      ? this.PonyS.updatePony(this.pony)
      : this.PonyS.addPony(this.pony);

    this.router.navigate(['/']);
  }
}
