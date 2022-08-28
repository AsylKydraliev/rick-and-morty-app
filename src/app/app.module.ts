import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterViewComponent } from './pages/characters/character-view/character-view.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './state/character/character.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationViewComponent } from './pages/locations/location-view/location-view.component';
import { locationsReducer } from './state/locations/locations.reducer';
import { LocationsEffects } from './state/locations/locations.effects';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SwitchToggleComponent } from './components/switch-toggle/switch-toggle.component';
import { CharactersEffects } from './state/characters/characters.effects';
import { charactersReducer } from './state/characters/characters.reducer';
import { CharacterEffects } from './state/character/character.effects';
import { LocationEffects } from './state/location/location.effects';
import { locationReducer } from './state/location/location.reducer';
import { SortComponent } from './components/sort/sort.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterViewComponent,
    HeaderComponent,
    LoaderComponent,
    NotFoundComponent,
    LocationsComponent,
    LocationViewComponent,
    SearchComponent,
    PaginationComponent,
    SwitchToggleComponent,
    SortComponent,
    FilterComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      JwPaginationModule,
      AutocompleteLibModule,
      StoreModule.forRoot({
        characters: charactersReducer,
        character: characterReducer,
        locations: locationsReducer,
        location: locationReducer,
      }, {}),
      EffectsModule.forRoot([
        CharactersEffects,
        CharacterEffects,
        LocationsEffects,
        LocationEffects,
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
