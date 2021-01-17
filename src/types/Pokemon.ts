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

export interface FetchOnePokemon {
  pokemon: SinglePokeData;
}

export interface SinglePokeData {
  name: string;
  types: TypeObject[];
}

export interface TypeObject {
  type: Type;
}

export interface Type {
  name: string;
}
