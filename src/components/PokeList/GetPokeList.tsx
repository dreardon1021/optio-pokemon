import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../apiCalls/gqlCalls";
import { FullPokemonList } from "../../types/Pokemon";
import PokeList from "./PokeList";
import { RouteComponentProps, withRouter } from "react-router";

interface PokeVariables {
  limit: number;
  offset: number;
}

const GetPokeList: FC<RouteComponentProps> = () => {
  const { loading, error, data } = useQuery<FullPokemonList, PokeVariables>(GET_POKEMONS, {
    variables: { limit: 150, offset: 0 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{`error: ${error.message}`}</p>;
  }

  return <PokeList allPokemon={data?.pokemons?.results} />;
};

export default withRouter(GetPokeList);
