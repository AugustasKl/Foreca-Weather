import React from "react";
import Header from "./components/layout/Header";
import { Route, Switch } from "react-router-dom";
import ResultDetail from "./pages/ResultDetail";
import background from '../src/assets/backgroung.jpg'
import { ImgContainer } from "./App.styles";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <React.Fragment>
      <ImgContainer src={background} alt="Homepage clouds"/>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/weather/:resultsId">
          <ResultDetail />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
