



export interface IPokemonDTO{
  id: number,
  name: string,
  url: string,
}

export interface IPokemonResponse{
  "count": number,
  "next": string,
  "previous": string,
  "results": IPokemonDTO[]
}
