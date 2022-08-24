export class Character {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public species: string,
    public type: string,
    public gender: string,
    public origin: {
      name: string,
      url: string
    },
    public location: {
      name: string,
      url: string,
    },
    public image: string,
    public episode: string[],
    public url: string,
    public created: string,
  ) {
  }
}

export class InfoApiResponse {
  constructor(
    public count: number,
    public pages: number,
    public next: string,
    public prev: null | string,
  ) {}
}

export class RickAndMortyApiResponse {
  constructor(
    public info: InfoApiResponse,
    public results: Character[],
  ) {
  }
}
