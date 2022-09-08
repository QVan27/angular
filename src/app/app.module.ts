import { AuthenticationService } from './services/auth/authentication.service';
import { RaceService } from './services/race/race.service';
import { PonyService } from 'src/app/services/pony/pony.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoniesComponent } from './components/ponies/ponies.component';
import { RacesComponent } from './components/races/races.component';
import { PonyComponent } from './components/pony/pony.component';
import { RaceLocationPipe } from './pipes/race-location.pipe';
import { AddPonyComponent } from './components/add-pony/add-pony.component';
import { AddRaceComponent } from './components/add-race/add-race.component';
import { FakeAuthFormComponent } from './components/fake-auth-form/fake-auth-form.component';
import { AddPonyReactiveComponent } from './components/add-pony-reactive/add-pony-reactive.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyComponent,
    RaceLocationPipe,
    AddPonyComponent,
    AddRaceComponent,
    FakeAuthFormComponent,
    AddPonyReactiveComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, PonyService, RaceService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
