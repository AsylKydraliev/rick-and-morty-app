import { createAction, props } from '@ngrx/store';
import { Location } from '../../models/locations.model';

export const fetchLocationRequest = createAction(
  '[Location] Fetch Request', props<{id: number}>()
);
export const fetchLocationSuccess = createAction(
  '[Location] Fetch Success', props<{location: Location}>()
);
export const fetchLocationFailure = createAction(
  '[Location] Fetch Failure', props<{error: string}>()
);
