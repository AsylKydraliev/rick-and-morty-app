import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Location, LocationsResponse } from '../../models/locations.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/types';
import { fetchLocationsRequest } from '../../state/locations/locations.actions';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locationsState: Observable<LocationsResponse | null>;
  locationsFetchError: Observable<string | null>;
  locationsFetchLoading: Observable<boolean>;
  locations!: Location[] | undefined;
  locationsSub!: Subscription;

  constructor(private store: Store<AppState>) {
    this.locationsState = store.select(state => state.locations.locations);
    this.locationsFetchError = store.select(state => state.locations.fetchError);
    this.locationsFetchLoading = store.select(state => state.locations.fetchLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchLocationsRequest());
    this.locationsSub = this.locationsState.subscribe(location => {
      this.locations = location?.results;
    })
  }

  ngOnDestroy() {
    this.locationsSub.unsubscribe();
  }
}
