import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../../models/locations.model';
import { LocationsService } from '../../../services/locations.service';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss']
})
export class LocationViewComponent implements OnInit {
  location: Location | null = null;

  constructor(private locationService: LocationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.locationService.getLocationById(params['id']).subscribe(location => {
        this.location = location;
      })
    })
  }
}
