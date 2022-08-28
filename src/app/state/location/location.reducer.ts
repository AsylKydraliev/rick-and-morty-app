import { createReducer, on } from '@ngrx/store';
import { LocationState } from '../types';
import { fetchLocationFailure, fetchLocationRequest, fetchLocationSuccess } from './location.actions';

const initialState: LocationState = {
  location: null,
  fetchLoading: false,
  fetchError: null,
}

export const locationReducer = createReducer(
  initialState,
  on(fetchLocationRequest, state => ({...state, fetchLoading: true})),
  on(fetchLocationSuccess, (state, {location}) => ({...state, fetchLoading: false, location})),
  on(fetchLocationFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
)
