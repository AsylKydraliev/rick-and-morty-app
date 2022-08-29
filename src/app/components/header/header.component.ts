import { Component } from '@angular/core';
import { AppState } from '../../state/types';
import { Store } from '@ngrx/store';
import { fetchCharactersRequest } from '../../state/characters/characters.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store<AppState>) { }

  getCharacters() {
    this.store.dispatch(fetchCharactersRequest());
  }
}
