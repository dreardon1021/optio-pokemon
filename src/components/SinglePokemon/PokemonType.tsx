import React, { FC } from "react";
import { Type, TypeObject } from "../../types/Pokemon";

interface Props {
  types: TypeObject[] | undefined;
  pokemonName: string;
}

const PokemonType: FC<Props> = ({ types, pokemonName }) => {
  console.log(types);
  return (
    <div>
      {types?.map((type: TypeObject) => {
        console.log(type.type.name);
        return <p key={type.type.name + pokemonName}>{type.type.name}</p>;
      })}
    </div>
  );
};

export default PokemonType;
