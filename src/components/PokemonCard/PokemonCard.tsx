import React, { FC } from "react";
import { H3 } from "../../blocks/H3";
import { FIND_ONE_POKEMON } from "../../apiCalls/gqlCalls";
import { FetchOnePokemon, OnePokeVariables } from "../../types/Pokemon";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import PrimaryButton from "../../blocks/PrimaryButton";
import PokemonType from "../PokemonType/PokemonType";
import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter";

interface Props {
  name: string;
  image: string;
}

const PokemonCard: FC<Props> = ({ name, image }) => {
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

  if (error) {
    return (
      <article className="w-2/5 flex flex-col items-center justify-between p-4 rounded-lg border-solid border-2 border-black mb-4">
        <H3>{`Error: ${error.message}`}</H3>
      </article>
    );
  }

  return (
    <article
      className={`bg-pokemon-${data?.pokemon.types[0].type.name} w-4/5 sm:w-2/5 flex flex-col items-center justify-between p-4 rounded-xl mt-4`}
    >
      <H3 className="text-white">{capitalizeFirstLetter(name)}</H3>
      <div className="flex justify-around w-full">
        <div className="w-2/5">
          <PokemonType types={data?.pokemon?.types} pokemonName={name} />
        </div>
        <img className="w-2/5" src={image} alt={name} />
      </div>
      <Link
        className="w-2/5"
        to={{
          pathname: `/${name}`,
          state: {
            image: image,
          },
        }}
      >
        <PrimaryButton className="w-full">View</PrimaryButton>
      </Link>
    </article>
  );
};

export default PokemonCard;
