import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterViewComponent } from './pages/characters/character-view/character-view.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { NotFoundComponent } from './shared/notFound/not-found.component';
import { StoreModule } from '@ngrx/store';
import { charactersReducer } from './state/characters/characters.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './state/characters/characters.effects';
import { HttpClientModule } from '@angular/common/http';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationViewComponent } from './pages/locations/location-view/location-view.component';
import { locationsReducer } from './state/locations/locations.reducer';
import { LocationsEffects } from './state/locations/locations.effects';
import { SearchComponent } from './shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SwitchToggleComponent } from './shared/switch-toggle/switch-toggle.component';

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
    SwitchToggleComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      JwPaginationModule,
      AutocompleteLibModule,
      StoreModule.forRoot({characters: charactersReducer, locations: locationsReducer}, {}),
      EffectsModule.forRoot([CharactersEffects, LocationsEffects])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
