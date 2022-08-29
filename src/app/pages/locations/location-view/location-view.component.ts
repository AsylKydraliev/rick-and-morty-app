import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../../models/locations.model';
import { Location as LocationRoute } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/types';
import { Observable } from 'rxjs';
import { fetchLocationRequest } from '../../../state/location/location.actions';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss']
})
export class LocationViewComponent implements OnInit {
  location: Observable<Location | null>;
  locationData!: Location | null;
  loading: Observable<boolean>;
  date!: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private locationRoute: LocationRoute
  ) {
    this.location = store.select(state => state.location.location);
    this.loading = store.select(state => state.location.fetchLoading);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch(fetchLocationRequest({id: params['id']}));
    })
    this.location.subscribe((loc: Location | null) => {
      this.locationData = loc;
      this.date = new Date(loc?.created!).toLocaleDateString();
    });
  }

  back(): void {
    this.locationRoute.back();
  }
}
