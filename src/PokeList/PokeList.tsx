import React, { FC } from "react";
import { FullPokemonList } from "../types/FullPokemonList";

interface Props {
  allPokemon: FullPokemonList | undefined;
}

export const PokeList: FC<Props> = ({ allPokemon }) => {
  return <div>{allPokemon?.pokemons.results[0].image}</div>;
};
