import { Component, OnInit } from '@angular/core';
import { Location as LocationRoute } from '@angular/common';
import { Character } from '../../../models/characters.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/types';
import { Observable } from 'rxjs';
import { fetchCharacterRequest } from '../../../state/character/character.actions';

@Component({
  selector: 'app-characters-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {
  char: Observable<Character | null>;
  character: Character | null = null;
  loading: Observable<boolean>;
  date!: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private locationRoute: LocationRoute
  ) {
    this.char = store.select(state => state.character.character);
    this.loading = store.select(state => state.character.fetchLoading);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch(fetchCharacterRequest({id: params['id']}));
    })
    this.char.subscribe((char: any) => {
      this.character = char;
      if(this.character) {
        this.date = new Date(char.created).toLocaleDateString();
      }
    })
  }

  back(): void {
    this.locationRoute.back();
  }
}
