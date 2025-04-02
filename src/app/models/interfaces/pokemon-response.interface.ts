

export interface IPokemonResponse{
  id: number,
  name: string,
  sprites: {front_default: string, front_shiny: string, front_female: string },
  types: ITypeDTO[],
  abilities: IAbilityDTO[],
  stats: IStatDTO[],
  height: number,
  weight: number
}

export interface IStatDTO{
  stat: {name: string},
  base_stat: number
}

export interface ITypeDTO{
  slot: number,
  type: {name: string}
}

export interface IAbilityDTO{
  slot: number,
  ability: {name: string}
}
