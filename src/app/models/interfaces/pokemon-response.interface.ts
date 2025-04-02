

export interface IPokemonResponse{
  id: number,
  name: string,
  sprites: any,
  types: any[],
  abilities: any[],
  stats: IStatDTO[],
  height: number,
  weight: number
}

export interface IStatDTO{
  stat: {name: string},
  base_stat: number
}
