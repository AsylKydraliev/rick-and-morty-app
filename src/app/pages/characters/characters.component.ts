import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character, CharacterResponse } from '../../models/characters.model';
import { AppState } from '../../state/types';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { fetchCharactersRequest } from '../../state/characters/characters.actions';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  charactersState: Observable<CharacterResponse | null>;
  charactersFetchError: Observable<string | null>;
  charactersFetchLoading: Observable<boolean>;
  characters!: Character[] | undefined;
  searchResult!: Character[];
  charactersSub!: Subscription;

  constructor(private store: Store<AppState>, private charactersService: CharactersService) {
    this.charactersState = store.select(state => state.characters.characters);
    this.charactersFetchError = store.select(state => state.characters.fetchError);
    this.charactersFetchLoading = store.select(state => state.characters.fetchLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCharactersRequest());
    this.getCharactersData();
  }

  getCharactersData() {
    this.charactersSub = this.charactersState.subscribe(char => {
      this.characters = char?.results;
    });
  }

  searchCharacters(value: string) {
    this.charactersService.searchCharacters(value).subscribe(data => {
      this.characters = data.results;
    });
  }

  ngOnDestroy() {
    this.charactersSub.unsubscribe();
  }
}
