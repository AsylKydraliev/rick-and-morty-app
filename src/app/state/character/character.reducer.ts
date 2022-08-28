import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../types';
import { fetchCharacterFailure, fetchCharacterRequest, fetchCharacterSuccess } from './character.actions';

const initialState: CharacterState = {
  character: null,
  fetchLoading: false,
  fetchError: null,
}

export const characterReducer = createReducer(
  initialState,
  on(fetchCharacterRequest, state => ({...state, fetchLoading: true})),
  on(fetchCharacterSuccess, (state, {character}) => ({...state, fetchLoading: false, character})),
  on(fetchCharacterFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
)
