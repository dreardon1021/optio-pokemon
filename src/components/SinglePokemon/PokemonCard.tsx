import React, { FC } from "react";
import { H3 } from "../../blocks/H3";
import { FIND_ONE_POKEMON } from "../../util/gqlCalls";
import { FetchOnePokemon } from "../../types/Pokemon";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import PrimaryButton from "../../blocks/PrimaryButton";
import PokemonType from "./PokemonType";

interface Props {
  name: string;
  image: string;
}
interface OnePokeVariables {
  name: string;
}

const PokemonCard: FC<Props> = ({ name, image }) => {
  const letCapitalPokeName = name.charAt(0).toUpperCase() + name.slice(1);

  const { loading, error, data } = useQuery<FetchOnePokemon, OnePokeVariables>(FIND_ONE_POKEMON, {
    variables: { name: name },
  });

  if (loading) {
    return (
      <article className="w-2/5 flex flex-col items-center justify-between p-4 rounded-lg border-solid border-2 border-black mb-4">
        <H3>Loading</H3>
      </article>
    );
  }

  console.log(data);

  return (
    <article className="w-2/5 flex flex-col items-center justify-between p-4 rounded-lg border-solid border-2 border-black mb-4">
      <H3>{letCapitalPokeName}</H3>
      <div>
        <PokemonType types={data?.pokemon?.types} pokemonName={name} />
      </div>
      <img src={image} alt={name} />
      <Link to="/:name">
        <PrimaryButton>View</PrimaryButton>
      </Link>
    </article>
  );
};

export default PokemonCard;
