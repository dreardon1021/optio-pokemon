import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import GetPokeList from "./components/PokeList/GetPokeList";
import NavBar from "./components/NavBar/NavBar";
import PokemonDetailCard from "./components/PokemonDetailCard/PokemonDetail";

const App: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Switch>
        <Route exact path="/" component={GetPokeList} />
        <Route exact path="/:name" render={(props) => <PokemonDetailCard {...props} />} />
      </Switch>
    </main>
  );
};

export default App;
