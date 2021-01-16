import React, { FC } from "react";
import { FullPokemonList } from "../../../types/Pokemon";

interface Props {
  allPokemon: FullPokemonList | undefined;
}

export const PokeList: FC<Props> = ({ allPokemon }) => {
  return <div>{allPokemon?.pokemons.results[0].image}</div>;
};
