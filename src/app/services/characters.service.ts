import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { Character, CharacterResponse } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {
  }

  getCharacters() {
    return this.http.get<CharacterResponse>(environment.charactersUrl).pipe(
      map(response => {
        return response;
      })
    );
  }

  getCharacterById(id: number) {
    return this.http.get<Character>(environment.charactersUrl + '/' + id).pipe(
      map(response => {
        return response;
      })
    )
  }

  searchCharacters(query: string) {
    return this.http.get<CharacterResponse>(`${environment.charactersUrl}/?name=${query}`).pipe(
      map(response => {
        return response;
      })
    );
  }

  onPagination(page: number) {
    return this.http.get<CharacterResponse>(`${environment.charactersUrl}?page=${page}`).pipe(
      map(response => {
        return response;
      })
    );
  }

  onFilter(filterCriterion: string) {
    return this.http.get<CharacterResponse>(`${environment.charactersUrl}/?${filterCriterion}`).pipe(
      map(response => {
        return response;
      })
    );
  }
}
