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
  type: {
    name: string;
  };
}

export interface DetailedPokeData {
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: PokeAbilities[];
    moves: Moves[];
    types: TypeObject[];
  };
}

export interface PokeAbilities {
  ability: {
    name: string;
  };
}

export interface Moves {
  move: {
    name: string;
  }
}

export interface OnePokeVariables {
  name: string;
}
