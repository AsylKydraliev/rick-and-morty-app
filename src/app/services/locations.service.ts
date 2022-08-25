import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { Location, LocationsResponse } from '../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get<LocationsResponse>(environment.locationsUrl).pipe(
      map(response => {
        return response;
      })
    );
  }

  getLocationById(id: number) {
    return this.http.get<Location>(environment.locationsUrl + '/' + id).pipe(
      map(response => {
        return response;
      })
    )
  }
}
