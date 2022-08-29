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

export const searchCharactersRequest = createAction(
  '[Characters] Search Request',
  props<{query: string}>()
);
export const searchCharactersSuccess = createAction(
  '[Characters] Search Success', props<{characters: CharacterResponse}>()
);
export const searchCharactersFailure = createAction(
  '[Characters] Search Failure', props<{error: string}>()
);
