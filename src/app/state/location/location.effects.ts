import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchLocationFailure, fetchLocationRequest, fetchLocationSuccess } from './location.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocationsService } from '../../services/locations.service';

@Injectable()

export class LocationEffects {
  constructor(private actions: Actions, private locationsService: LocationsService) {}

  fetchLocations = createEffect(() => this.actions.pipe(
    ofType(fetchLocationRequest),
    mergeMap(id => this.locationsService.getLocationById(id.id).pipe(
      map(location => fetchLocationSuccess({location})),
      catchError(() => of(fetchLocationFailure({
        error: 'An error occurred while getting of location'
      })))
    ))
  ));
}
