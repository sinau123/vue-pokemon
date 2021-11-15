export interface Pokemon {
  url: string
  name: string
  image: string
  artwork: string
  dreamworld: string
}

export interface Pokemons {
  results: Pokemon []
  count?: number
}
export interface PokemonResults {
  pokemons: Pokemons
}
