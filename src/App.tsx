import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import { PageNotFound } from "./common";
import { Coder } from "./products";

const App: React.FC<any> = () => {
  const paths = {
    static: "/",
    coder: "/coder",
  };
  return (
    <>
      <Router>
        <Switch>
          <Route key={paths.coder} path={paths.coder} component={Coder} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
