import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import GetPokeList from "./components/PokeList/GetPokeList";
import NavBar from "./components/NavBar/NavBar";

const App: FC = () => {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={GetPokeList} />
      </Switch>
    </main>
  );
};

export default App;
