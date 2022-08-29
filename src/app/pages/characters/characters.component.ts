import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character, CharacterResponse } from '../../models/characters.model';
import { AppState } from '../../state/types';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CharactersService } from '../../services/characters.service';
import { fetchCharactersRequest, searchCharactersRequest } from '../../state/characters/characters.actions';

@Component({
  selector: 'app-character',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  charactersState: Observable<CharacterResponse | null>;
  searchCharactersState: Observable<CharacterResponse | null>;
  charactersFetchError: Observable<string | null>;
  charactersFetchLoading: Observable<boolean>;
  characters: Character[] | any = [];
  charactersSub!: Subscription;
  totalItems: number | undefined = 0;
  page: number = 1;
  error = '';
  nextPage = '';
  searchName = '';
  filterValue = '';

  constructor(
    private store: Store<AppState>,
    private charactersService: CharactersService
  ) {
    this.charactersState = store.select(state => state.characters.characters);
    this.charactersFetchError = store.select(state => state.characters.fetchError);
    this.charactersFetchLoading = store.select(state => state.characters.fetchLoading);
    this.searchCharactersState = store.select(state => state.characters.characters);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCharactersRequest());
    this.getCharactersData();
  }

  dispatchAction() {
    this.store.dispatch(fetchCharactersRequest());
  }

  getCharactersData() {
    this.charactersSub = this.charactersState.subscribe(char => {
      this.characters = char?.results;
      this.totalItems = char?.info.count;
    });
  }

  searchCharacters(value: string) {
    this.searchName = value;
    this.store.dispatch(searchCharactersRequest({query: value}));

    this.searchCharactersState.subscribe(char => {
      this.characters = char?.results;
      this.nextPage = char?.info.next!;
      this.totalItems = char?.info.count;
    })
  }

  onFilter(value: string) {
    this.filterValue = value;
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
    }

    this.charactersService.onFilter(criterion.toLowerCase()).subscribe(data => {
      this.characters = data.results;
      this.totalItems = data.info.count;
    })
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

      return 0;
    });
  }

  onPagination() {
    if (this.nextPage !== '') {
      this.charactersService.onPaginationOfSearchItems(this.page, this.searchName)
        .subscribe(data => {
          this.characters = data.results;
          this.totalItems = data?.info.count;
        });
      return;
    } else if (this.filterValue !== '') {
      this.charactersService.onPaginationOfFilterItems(this.page, this.filterValue.toLowerCase())
        .subscribe(data => {
          this.characters = data.results;
          this.totalItems = data?.info.count;
        });
      return;
    } else {
      this.charactersService.onPagination(this.page).subscribe(data => {
        this.characters = data.results;
        this.totalItems = data?.info.count;
      });
      return;
    }
  }

  ngOnDestroy() {
    this.charactersSub.unsubscribe();
  }
}
