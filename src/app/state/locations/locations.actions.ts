import { createAction, props } from '@ngrx/store';
import { LocationsResponse } from '../../models/locations.model';

export const fetchLocationsRequest = createAction(
  '[Locations] Fetch Request'
);
export const fetchLocationsSuccess = createAction(
  '[Locations] Fetch Success', props<{locations: LocationsResponse}>()
);
export const fetchLocationsFailure = createAction(
  '[Locations] Fetch Failure', props<{error: string}>()
);
