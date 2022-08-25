export class InfoApiResponse {
  constructor(
    public count: number,
    public pages: number,
    public next: string,
    public prev: null | string,
  ) {}
}
