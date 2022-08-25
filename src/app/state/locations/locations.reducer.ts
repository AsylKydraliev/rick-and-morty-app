import { createReducer, on } from '@ngrx/store';
import { LocationsState } from '../types';
import { fetchLocationsFailure, fetchLocationsRequest, fetchLocationsSuccess } from './locations.actions';

const initialState: LocationsState = {
  locations: null,
  fetchLoading: false,
  fetchError: null,
}

export const locationsReducer = createReducer(
  initialState,
  on(fetchLocationsRequest, state => ({...state, fetchLoading: true})),
  on(fetchLocationsSuccess, (state, {locations}) => ({...state, fetchLoading: false, locations})),
  on(fetchLocationsFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
)
