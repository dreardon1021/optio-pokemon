import React, { FC } from "react";
import PokeLogo from "../../assets/PokeLogo.png";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <nav className="w-full flex justify-center">
      <Link to="/">
        <img className="max-h-40 cursor-pointer" src={PokeLogo} alt="pokemon-logo" />
      </Link>
    </nav>
  );
};

export default NavBar;
