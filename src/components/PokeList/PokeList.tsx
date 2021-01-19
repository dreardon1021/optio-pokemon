import React, { FC, useState } from "react";
import { SinglePokemon } from "../../types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";

interface Props {
  allPokemon: SinglePokemon[] | undefined;
}

const PokeList: FC<Props> = ({ allPokemon }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonCount = allPokemon?.length;
  const pokemonPerPage = 10;

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstRestaurant = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = allPokemon?.slice(indexOfFirstRestaurant, indexOfLastPokemon);

  const pageNumbers = [];

  if (pokemonCount) {
    for (let i = 1; i <= Math.ceil(pokemonCount / pokemonPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as Element;
    setCurrentPage(Number(target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        className={
          (currentPage === number ? "bg-pokemon-theme-blue " : "") +
          "bg-pokemon-theme-yellow font-semi-bold w-12 rounded-lg ml-2 mt-2 border-black border-solid border-2"
        }
        key={number}
      >
        <button id={`${number}`} onClick={handleClick} className="cursor-pointer w-full">
          {number}
        </button>
      </li>
    );
  });

  const renderCurrentPokemon = () => {
    return (
      <div className="w-full flex justify-around flex-wrap">
        {currentPokemon?.map((pokemon) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />;
        })}
      </div>
    );
  };

  return (
    <section className="w-full flex flex-col items-center">
      <ul className="flex flex-wrap justify-between w-4/5 mt-8 mb-8">{renderPageNumbers}</ul>
      {renderCurrentPokemon()}
      <ul className="flex flex-wrap justify-between w-4/5 mt-8 mb-8">{renderPageNumbers}</ul>
    </section>
  );
};

export default PokeList;
