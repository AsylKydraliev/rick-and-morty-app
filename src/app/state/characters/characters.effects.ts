import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchCharactersFailure, fetchCharactersRequest, fetchCharactersSuccess } from './characters.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { Injectable } from '@angular/core';

@Injectable()

export class CharactersEffects {
  constructor(private actions: Actions, private charactersService: CharactersService) {}

  fetchCharacters = createEffect(() => this.actions.pipe(
    ofType(fetchCharactersRequest),
    mergeMap(() => this.charactersService.getCharacters().pipe(
      map(characters => fetchCharactersSuccess({characters})),
      catchError(() => of(fetchCharactersFailure({
        error: 'An error occurred while getting the list of characters'
      })))
    ))
  ));
}
