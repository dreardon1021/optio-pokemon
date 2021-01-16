import React, { FC, useState, useEffect } from "react";
import { fetchForPokemon } from "../util/apiCalls";
import { H2 } from "../blocks/H2";
import { RouteComponentProps } from "react-router";

export const PokeList: FC<RouteComponentProps> = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchFoPokemon();
  }, []);

  return <H2>PokeList</H2>;
};
