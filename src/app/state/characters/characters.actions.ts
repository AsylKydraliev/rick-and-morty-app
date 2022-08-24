import { createAction, props } from '@ngrx/store';
import { RickAndMortyApiResponse } from '../../models/characters.model';

export const fetchCharactersRequest = createAction(
  '[Characters] Fetch Request'
);
export const fetchCharactersSuccess = createAction(
  '[Characters] Fetch Success', props<{characters: RickAndMortyApiResponse}>()
);
export const fetchCharactersFailure = createAction(
  '[Characters] Fetch Failure', props<{error: string}>()
);
