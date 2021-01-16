import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import GetPokeList from "./components/PokeList/PokeList/GetPokeList";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={GetPokeList} />
    </Switch>
  );
};

export default App;
