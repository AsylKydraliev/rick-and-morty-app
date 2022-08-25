import { createAction, props } from '@ngrx/store';
import { CharacterResponse } from '../../models/characters.model';

export const fetchCharactersRequest = createAction(
  '[Characters] Fetch Request'
);
export const fetchCharactersSuccess = createAction(
  '[Characters] Fetch Success', props<{characters: CharacterResponse}>()
);
export const fetchCharactersFailure = createAction(
  '[Characters] Fetch Failure', props<{error: string}>()
);
