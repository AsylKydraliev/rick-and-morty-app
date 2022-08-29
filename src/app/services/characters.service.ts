import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { Character, CharacterResponse } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  nextPage!: string;

  constructor(private http: HttpClient) {}

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
      }),
    );
  }

  onPagination(page?: number | string) {
    return this.http.get<CharacterResponse>(`${environment.charactersUrl}?page=${page}`).pipe(
      map(response => {
        return response;
      })
    );
  }

  onPaginationOfSearchItems(page: number | string, name: string) {
    return this.http.get<CharacterResponse>(`${environment.charactersUrl}?page=${page}&name=${name}`)
      .pipe(map(response => {
        return response;
      })
    );
  }

  onPaginationOfFilterItems(page: number | string, value: string) {
    let criterion = '';
    switch (value) {
      case 'alive':
      case 'dead':
      case 'unknown':
        criterion = `status=${value}`;
        console.log(criterion);
        break;
      case 'female':
      case 'male':
      case 'genderless':
      case 'unknown':
        criterion = `gender=${value}`;
        break;
    }

    return this.http.get<CharacterResponse>(`${environment.charactersUrl}?page=${page}&${criterion}`)
      .pipe(map(response => {
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
