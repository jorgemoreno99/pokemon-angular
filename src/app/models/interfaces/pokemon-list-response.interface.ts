import { IPokemonDTO } from "./pokemon.interface";

export interface IPokemonListResponse{
  "count": number,
  "next": string,
  "previous": string,
  "results": IPokemonDTO[]
}
