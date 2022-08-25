import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchLocationsFailure, fetchLocationsRequest, fetchLocationsSuccess } from './locations.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocationsService } from '../../services/locations.service';

@Injectable()

export class LocationsEffects {
  constructor(private actions: Actions, private locationsService: LocationsService) {}

  fetchLocations = createEffect(() => this.actions.pipe(
    ofType(fetchLocationsRequest),
    mergeMap(() => this.locationsService.getLocations().pipe(
      map(locations => fetchLocationsSuccess({locations})),
      catchError(() => of(fetchLocationsFailure({
        error: 'An error occurred while getting the list of locations'
      })))
    ))
  ));
}
