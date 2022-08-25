import { CharacterResponse } from '../models/characters.model';
import { LocationsResponse } from '../models/locations.model';

export type CharactersState = {
  characters: CharacterResponse | null,
  fetchLoading: boolean;
  fetchError: null | string;
};

export type LocationsState = {
  locations: LocationsResponse | null,
  fetchLoading: boolean;
  fetchError: null | string;
};

export type AppState = {
  characters: CharactersState,
  locations: LocationsState,
};


