import React from "react";
import { gql, useQuery } from "@apollo/client";
import PokemonList, { PokemonList } from "../types/PokemonList";

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

const gqlVariables = {
  limit: 2,
  offset: 1,
};

export const FetchForPokemon = (): string => {
  const { loading, error, data } = useQuery<PokemonList>(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);
  return "Success!";
};
