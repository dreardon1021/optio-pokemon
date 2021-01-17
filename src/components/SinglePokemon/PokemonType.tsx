import React, { FC } from "react";
import { Type, TypeObject } from "../../types/Pokemon";

interface Props {
  types: TypeObject[] | undefined;
  pokemonName: string;
}

const PokemonType: FC<Props> = ({ types, pokemonName }) => {
  const capitalPokeType = (typeName: string): string => {
    return typeName.charAt(0).toUpperCase() + typeName.slice(1);
  };

  return (
    <div className="rounded-lg">
      {types?.map((type: TypeObject) => {
        return (
          <p
            className={`md:w-3/5 bg-pokemon-${type.type.name} rounded-lg p-1 border-solid border-black border-2 mb-2 w-full`}
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
