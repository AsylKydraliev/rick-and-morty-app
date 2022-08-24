import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterViewComponent } from './pages/characters/character-view/character-view.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { NotFoundComponent } from './shared/notFound/not-found.component';
import { StoreModule } from '@ngrx/store';
import { charactersReducer } from './state/characters/characters.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './state/characters/characters.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterViewComponent,
    PlanetsComponent,
    HeaderComponent,
    LoaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({characters: charactersReducer}, {}),
    EffectsModule.forRoot([CharactersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
