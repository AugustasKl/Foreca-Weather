import React from "react";
import Header from "./components/layout/Header";
import Search from "./components/searchBar/Search";
import { Route, Switch } from "react-router-dom";
import ResultDetail from "./pages/ResultDetail";
import background from '../src/assets/backgroung.jpg'
import { ImgContainer } from "./App.styles";

function App() {

  return (
    <React.Fragment>
      <ImgContainer src={background} alt="Homepage clouds"/>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Search />
        </Route>
        <Route path="/weather/:resultsId">
          <ResultDetail />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
