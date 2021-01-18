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
  id: number;
  name: string;
  height: number;
  weight: number;
  species: PokeSpecies;
  abilities: PokeAbilities;
  types: TypeObject[];
}

export interface PokeSpecies {
  name: string;
}

export interface PokeAbilities {
  ability: {
    name: string;
  };
}

export interface OnePokeVariables {
  name: string;
}
