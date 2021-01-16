import React, { FC } from "react";
import { H1 } from "./blocks/H1";
import PrimaryButton from "./blocks/PrimaryButton";
import { Route, Switch } from "react-router-dom";
import { PokeList } from "./PokeList/PokeList";

const App: FC = () => {
  return (
    <Switch>
      <Route path="/" render={PokeList} />
    </Switch>
  );
};

export default App;
