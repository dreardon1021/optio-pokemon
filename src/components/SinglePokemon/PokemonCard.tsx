import React, { FC } from "react";
import { H3 } from "../../blocks/H3";
import { FIND_ONE_POKEMON } from "../../util/gqlCalls";
import { FetchOnePokemon } from "../../types/Pokemon";
import { useQuery } from "@apollo/client";

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

  console.log(data);

  return (
    <article>
      <H3>{letCapitalPokeName}</H3>
      <img src={image} />
    </article>
  );
};

export default PokemonCard;
