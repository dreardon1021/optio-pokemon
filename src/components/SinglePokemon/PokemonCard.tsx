import React, { FC } from "react";
import { H3 } from "../../blocks/H3";

interface Props {
  name: string;
}

const PokemonCard: FC<Props> = ({ name }) => {
  const letCapitalPokeName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <article>
      <H3>{letCapitalPokeName}</H3>
    </article>
  );
};

export default PokemonCard;
