import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchCharacterFailure, fetchCharacterRequest, fetchCharacterSuccess } from './character.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Injectable()

export class CharacterEffects {
  constructor(private actions: Actions, private charactersService: CharactersService) {}

  fetchCharacter = createEffect(() => this.actions.pipe(
    ofType(fetchCharacterRequest),
    mergeMap(id => this.charactersService.getCharacterById(id.id).pipe(
      map(character => fetchCharacterSuccess({character})),
      catchError(() => of(fetchCharacterFailure({
        error: 'An error occurred while getting of character'
      })))
    ))
  ));
}
