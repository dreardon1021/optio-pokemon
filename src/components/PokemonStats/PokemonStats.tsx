import React, { FC } from "react";
import { H3 } from "../../blocks/H3";
import { DetailedPokeData } from "../../types/Pokemon";
import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter";

interface Props {
  data: DetailedPokeData | undefined;
}

const PokemonStats: FC<Props> = ({ data }) => {
  const exampleMoves = data?.pokemon.moves.slice(0, 4);

  return (
    <>
      <hr className="h-1 w-full mt-4" />
      <div className="text-white flex flex-col items-center w-full mt-4">
        <H3 className="text-center text-white">Abilities</H3>
        {data?.pokemon?.abilities.map((ability) => {
          return (
            <p className="text-lg font-semibold mb-1" key={ability.ability.name}>
              {capitalizeFirstLetter(ability.ability.name)}
            </p>
          );
        })}
        <hr className="h-1 w-full mt-4 mb-4" />
        <H3 className="text-center text-white">Height & Weight</H3>
        <p className="text-lg font-semibold">{`Height: ${data?.pokemon?.height}`}</p>
        <p className="text-lg font-semibold">{`Weight: ${data?.pokemon?.weight}`}</p>
        <hr className="h-1 w-full mt-4 mb-4" />
        <H3 className="text-center text-white">Example Moves</H3>
        {exampleMoves &&
          exampleMoves.map((move) => {
            return (
              <p className="text-lg font-semibold mb-1" key={move.move.name}>
                {capitalizeFirstLetter(move.move.name)}
              </p>
            );
          })}
      </div>
    </>
  );
};

export default PokemonStats;
