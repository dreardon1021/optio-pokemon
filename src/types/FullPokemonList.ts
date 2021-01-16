export interface FullPokemonList {
  pokemons: OriginalPokemonsList;
}

export interface OriginalPokemonsList {
  results: SinglePokemon[];
}

export interface SinglePokemon {
  image: string;
  name: string;
  url: string;
}
