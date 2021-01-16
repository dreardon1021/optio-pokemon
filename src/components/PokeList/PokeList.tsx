import React, { FC } from "react";
import { SinglePokemon } from "../../types/Pokemon";
import PokemonCard from "../SinglePokemon/PokemonCard";

interface Props {
  allPokemon: SinglePokemon[] | undefined;
}

const PokeList: FC<Props> = ({ allPokemon }) => {
  return (
    <section>
      {allPokemon?.map((pokemon) => {
        return <PokemonCard key={pokemon.name} name={pokemon.name} />;
      })}
    </section>
  );
};

export default PokeList;
