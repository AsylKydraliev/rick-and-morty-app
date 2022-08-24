import { Component, OnInit } from '@angular/core';
import { Character, RickAndMortyApiResponse } from '../../models/characters.model';
import { AppState } from '../../state/types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { fetchCharactersRequest } from '../../state/characters/characters.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersState: Observable<RickAndMortyApiResponse | null>;
  charactersFetchError: Observable<string | null>;
  charactersFetchLoading: Observable<boolean>;
  characters!: Character[] | undefined;

  constructor(private store: Store<AppState>) {
    this.charactersState = store.select(state => state.characters.characters);
    this.charactersFetchError = store.select(state => state.characters.fetchError);
    this.charactersFetchLoading = store.select(state => state.characters.fetchLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCharactersRequest());
    this.charactersState.subscribe(char => {
      this.characters = char?.results;
    })
  }
}
