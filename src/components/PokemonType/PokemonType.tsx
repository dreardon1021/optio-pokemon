import React, { FC } from "react";
import { TypeObject } from "../../types/Pokemon";
import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter";

interface Props {
  types: TypeObject[] | undefined;
  pokemonName: string;
}

const PokemonType: FC<Props> = ({ types, pokemonName }) => {
  const capitalPokeType = (typeName: string): string => {
    return capitalizeFirstLetter(typeName);
  };

  return (
    <div className="rounded-lg w-full flex flex-col items-center">
      {types?.map((type: TypeObject) => {
        return (
          <p
            className={`text-white font-semibold text-center md:w-3/5 bg-pokemon-${type.type.name} rounded-lg p-1 border-solid border-black border-2 mb-2 w-full`}
            key={type.type.name + pokemonName}
          >
            {capitalPokeType(type.type.name)}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonType;
