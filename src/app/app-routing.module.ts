import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { FakeAuthFormComponent } from './components/fake-auth-form/fake-auth-form.component';
import { AddRaceComponent } from './components/add-race/add-race.component';
import { PonyComponent } from './components/pony/pony.component';
import { PoniesComponent } from './components/ponies/ponies.component';
import { RacesComponent } from './components/races/races.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddPonyReactiveComponent } from './components/add-pony-reactive/add-pony-reactive.component';
import { AddPonyComponent } from './components/add-pony/add-pony.component';

const routes: Routes = [
  { path: '', component: FakeAuthFormComponent },
  { path: 'add-pony-reactive', component: AddPonyReactiveComponent },
  { path: 'add-pony', component: AddPonyComponent, canActivate: [AuthGuardService]},
  { path: 'add-race', component: AddRaceComponent },
  { path: 'pony/:id', component: PonyComponent },
  { path: 'races', component: RacesComponent },
  { path: 'ponies', component: PoniesComponent, canActivate: [AuthGuardService] },
  { path: '**', pathMatch: 'full', 
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
