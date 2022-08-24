import { RickAndMortyApiResponse } from '../models/characters.model';

export type CharactersState = {
  characters: RickAndMortyApiResponse | null,
  fetchLoading: boolean;
  fetchError: null | string;
};

export type AppState = {
  characters: CharactersState,
};


