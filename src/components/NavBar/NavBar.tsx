import React, { FC } from "react";
import PokeLogo from "../../assets/PokeLogo.png";

const NavBar: FC = () => {
  return (
    <nav className="w-full flex justify-center">
      <img className="max-h-40" src={PokeLogo} alt="pokemon-logo" />
    </nav>
  );
};

export default NavBar;
