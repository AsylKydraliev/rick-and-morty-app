import { Character, CharacterResponse } from '../models/characters.model';
import { Location, LocationsResponse } from '../models/locations.model';

export type CharactersState = {
  characters: CharacterResponse | null,
  fetchLoading: boolean;
  fetchError: null | string;
};

export type CharacterState = {
  character: Character | null,
  fetchLoading: boolean;
  fetchError: null | string;
};

export type LocationsState = {
  locations: LocationsResponse | null,
  fetchLoading: boolean;
  fetchError: null | string;
};

export type LocationState = {
  location: Location | null,
  fetchLoading: boolean;
  fetchError: null | string;
};

export type AppState = {
  characters: CharactersState,
  character: CharacterState,
  locations: LocationsState,
  location: LocationState,
};


