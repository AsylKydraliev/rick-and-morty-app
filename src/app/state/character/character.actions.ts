import { createAction, props } from '@ngrx/store';
import { Character } from '../../models/characters.model';

export const fetchCharacterRequest = createAction(
  '[character] Fetch Request',
  props<{id: number}>()
);
export const fetchCharacterSuccess = createAction(
  '[character] Fetch Success', props<{character: Character}>()
);
export const fetchCharacterFailure = createAction(
  '[character] Fetch Failure', props<{error: string}>()
);
