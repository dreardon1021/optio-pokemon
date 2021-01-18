import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import GetPokeList from "./components/PokeList/GetPokeList";
import NavBar from "./components/NavBar/NavBar";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

const App: FC = () => {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={GetPokeList} />
        <Route exact path="/:name" render={(props) => <PokemonDetail {...props} />} />
      </Switch>
    </main>
  );
};

export default App;
