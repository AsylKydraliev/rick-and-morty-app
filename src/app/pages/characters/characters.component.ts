import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character, CharacterResponse } from '../../models/characters.model';
import { AppState } from '../../state/types';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CharactersService } from '../../services/characters.service';
import { fetchCharactersRequest } from '../../state/characters/characters.actions';

@Component({
  selector: 'app-character',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  charactersState: Observable<CharacterResponse | null>;
  charactersFetchError: Observable<string | null>;
  charactersFetchLoading: Observable<boolean>;
  characters: Character[] | any = [];
  charactersSub!: Subscription;
  pageCount: number | undefined = 0;
  nextPage!: any;
  prevPage!: number;

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
      this.pageCount = char?.info.pages;
      this.nextPage = char?.info.next;
    });
  }

  searchCharacters(value: string) {
    this.charactersService.searchCharacters(value).subscribe(data => {
      this.characters = data.results;
    });
  }

  onPagination(page: number | string) {
    this.store.dispatch(fetchCharactersRequest());
    this.charactersService.onPagination(page).subscribe(data => {
      this.characters = data.results;
      this.nextPage = parseInt(data.info.next.slice(-1));

      if(data.info.prev) {
        this.prevPage = parseInt(data.info.prev.slice(-1));
      }

      return;
    });
  }

  onSort(event: string) {
    const charactersCopy = [...this.characters];
    this.characters = charactersCopy.sort((a: Character, b: Character) => {
      if(event === 'Name (A-Z)') {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
      }
      if(event === 'Name (Z-A)') {
        if(a.name > b.name) return -1;
        if(a.name < b.name) return 1;
      }
      if(event === 'Default') {
        return a.id - b.id;
      }

      return 0;
    });
  }

  onFilter(value: string) {
    let criterion = '';

    switch (value) {
      case 'Alive':
      case 'Dead':
      case 'Unknown':
        criterion = `status=${value}`;
        break;
      case 'Female':
      case 'Male':
      case 'Genderless':
      case 'Unknown':
        criterion = `gender=${value}`;
        break;
      default:
        this.store.dispatch(fetchCharactersRequest());
    }

    this.charactersService.onFilter(criterion.toLowerCase()).subscribe(data => {
      this.characters = data.results;
    })
  }

  ngOnDestroy() {
    this.charactersSub.unsubscribe();
  }
}
