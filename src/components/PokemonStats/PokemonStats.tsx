import React, { FC } from "react";
import { H3 } from "../../blocks/H3";
import { DetailedPokeData } from "../../types/Pokemon";

interface Props {
  data: DetailedPokeData | undefined;
}

const PokemonStats: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col w-full mt-4">
        <H3 className="text-center">Abilities</H3>
        {data?.pokemon?.abilities.map((ability) => {
          return (
            <p key={ability.ability.name}>
              {ability.ability.name.charAt(0).toUpperCase + ability.ability.name.slice(1)}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default PokemonStats;
