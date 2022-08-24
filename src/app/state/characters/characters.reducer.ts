import { createReducer, on } from '@ngrx/store';
import { CharactersState } from '../types';
import { fetchCharactersFailure, fetchCharactersRequest, fetchCharactersSuccess } from './characters.actions';

const initialState: CharactersState = {
  characters: null,
  fetchLoading: false,
  fetchError: null,
}

export const charactersReducer = createReducer(
  initialState,
  on(fetchCharactersRequest, state => ({...state, fetchLoading: true})),
  on(fetchCharactersSuccess, (state, {characters}) => ({...state, fetchLoading: false, characters})),
  on(fetchCharactersFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
)
