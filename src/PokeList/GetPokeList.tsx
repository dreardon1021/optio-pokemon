import React, { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { FullPokemonList } from "../types/FullPokemonList";
import { PokeList } from "./PokeList";
import { RouteComponentProps } from "react-router";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

interface PokeVariables {
  limit: number;
  offset: number;
}

export const GetPokeList: FC<RouteComponentProps> = () => {
  const { loading, error, data } = useQuery<FullPokemonList, PokeVariables>(GET_POKEMONS, {
    variables: { limit: 2, offset: 1 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{`error: ${error.message}`}</p>;
  }

  console.log(data);

  return (
    <div>
      <p>YOU DID IT!</p>
      <PokeList />
    </div>
  );
};
