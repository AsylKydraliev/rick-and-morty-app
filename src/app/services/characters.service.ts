import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { Character, RickAndMortyApiResponse } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get<RickAndMortyApiResponse>(environment.characters).pipe(
      map(response => {
        return response;
      })
    );
  }

  getCharacterById(id: number) {
    return this.http.get<Character>(environment.characters + '/' + id).pipe(
      map(response => {
        return response;
      })
    )
  }
}
