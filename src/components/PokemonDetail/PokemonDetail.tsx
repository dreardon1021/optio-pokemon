import React, { FC } from "react";
import { H2 } from "../../blocks/H2";
import { H3 } from "../../blocks/H3";
import { RouteComponentProps, withRouter } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_POKE_DETAILS } from "../../util/gqlCalls";
import { DetailedPokeData, OnePokeVariables } from "../../types/Pokemon";

const PokemonDetail: FC<RouteComponentProps> = ({ match }) => {
  const name = match.url.slice(1);
  const pokemonNameCapitalize = name.charAt(0).toUpperCase() + name.slice(1);

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
    <section className="flex justify-center items-center mt-8">
      <H2>{pokemonNameCapitalize}</H2>
    </section>
  );
};

export default withRouter(PokemonDetail);
