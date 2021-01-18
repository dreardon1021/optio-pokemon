import React, { FC } from "react";
import { H2 } from "../../blocks/H2";
import { H3 } from "../../blocks/H3";
import { RouteComponentProps, withRouter } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_POKE_DETAILS } from "../../util/gqlCalls";
import { DetailedPokeData, OnePokeVariables } from "../../types/Pokemon";
import PokemonType from "../PokemonType/PokemonType";
import PokemonStats from "../PokemonStats/PokemonStats";
import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter";
import PrimaryButton from "../../blocks/PrimaryButton";
import { Link } from "react-router-dom";

interface Location {
  location: {
    state: {
      image: string;
    };
  };
}

const PokemonDetailCard: FC<RouteComponentProps & Location> = ({ match, location }) => {
  const name = match.url.slice(1);
  const pokeImage = location.state.image;

  const { loading, error, data } = useQuery<DetailedPokeData, OnePokeVariables>(GET_POKE_DETAILS, {
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
    <section
      className={`w-3/4 p-4 bg-pokemon-${data?.pokemon.types[0].type.name} flex flex-col justify-between items-center mt-8 mb-12 rounded-2xl`}
    >
      <H2 className="text-white">{capitalizeFirstLetter(name)}</H2>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <img className="w-full" src={pokeImage} alt={`image-of-${name}`} />
        <div className="w-full flex flex-col justify-items-center">
          <PokemonType types={data?.pokemon.types} pokemonName={name} />
          <PokemonStats data={data} />
        </div>
      </div>
      <Link className="mt-12 w-1/4" to="/">
        <PrimaryButton className="w-full">Go Back</PrimaryButton>
      </Link>
    </section>
  );
};

export default withRouter(PokemonDetailCard);
