import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Race } from 'src/app/race';
@Injectable({
  providedIn: 'root',
})
export class RaceService {
  url = 'https://ludivinecrepin.fr/api/';

  httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  // 1 méthode = 1 appel à l'API
  getAll(): Observable<Race[]> {
    return this.http.get<Race[]>(this.url + 'race-get.php', this.httpOption);
  }

  // Créer une méthode post pour ajouter un poney
  addRace(race: Race): Observable<Race> {
    return this.http.post<Race>(
      this.url + 'race-add.php',
      race,
      this.httpOption
    );
  }
}
