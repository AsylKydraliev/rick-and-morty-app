import { InfoApiResponse } from './pageInfo.model';

export class Location {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public dimension: string,
    public residents: string[],
    public url: string,
    public created: string,
  ) {
  }
}

export class LocationsResponse {
  constructor(
    public info: InfoApiResponse,
    public results: Location[],
  ) {}
}
