export interface Pokemon {
  url: string
  name: string
  image: string
  artwork: string
  dreamworld: string
}

// export class Pokemon implements IPokemon {
//   url: string
//   name: string
//   image: string
//   artwork: string
//   dreamworld: string

//   constructor(data: IPokemon) {
//     this.url = data.url
//     this.name = data.name
//     this.image = data.image
//     this.artwork = data.artwork
//     this.dreamworld = data.dreamworld
//   }

//   getImage() {
//     return this.artwork || this.dreamworld || this.image
//   }
// }

export interface Pokemons {
  results: Pokemon []
  count?: number
}
export interface PokemonResults {
  pokemons: Pokemons
}
