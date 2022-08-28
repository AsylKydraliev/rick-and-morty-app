import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterViewComponent } from './pages/characters/character-view/character-view.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationViewComponent } from './pages/locations/location-view/location-view.component';

const routes: Routes = [
  {path: '', component: CharactersComponent},
  {path: 'characters/:id', component: CharacterViewComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'location/:id', component: LocationViewComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
