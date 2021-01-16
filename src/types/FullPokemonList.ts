export interface FullPokemonList {
  pokemons: {
    [key: string]: PokemonsTwentyCount;
  };
}

interface PokemonsTwentyCount {
  count: number;
  next: string;
  previous: string;
  results: SinglePokemon[];
}

interface SinglePokemon {
  name: string;
  url: string;
}
