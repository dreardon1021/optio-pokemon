import React, { FC } from "react";
import { H1 } from "./blocks/H1";
import PrimaryButton from "./blocks/PrimaryButton";
import { Route, Switch } from "react-router-dom";
import GetPokeList from "./PokeList/GetPokeList";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={GetPokeList} />
    </Switch>
  );
};

export default App;
