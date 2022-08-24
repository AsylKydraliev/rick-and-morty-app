import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { CharacterViewComponent } from './pages/characters/character-view/character-view.component';
import { NotFoundComponent } from './shared/notFound/not-found.component';

const routes: Routes = [
  {path: '', component: CharactersComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'character', component: CharacterViewComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
