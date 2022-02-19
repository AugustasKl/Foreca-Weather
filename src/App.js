import React, { useCallback, useEffect } from "react";
import Header from "./components/layout/Header";
import Search from "./components/searchBar/Search";
import { Route, Switch } from "react-router-dom";
import ResultDetail from "./pages/ResultDetail";
import { useDispatch, useSelector } from "react-redux";
import { forecastActions } from "./redux/forecast-slice";
import background from '../src/assets/backgroung.jpg'
import classes from './App.module.css'
function App() {
  // const dispatch=useDispatch()
  // const forecastData = useSelector((state) => state.forecast.forecast);
  // console.log(forecastData);

  // const calfun=useCallback(()=>
  //    dispatch(
  //     forecastActions.replaceForecasthHandler({
  //       //   date: "",
  //       //   maxTemp: "",
  //       //   minTemp: "",
  //       //   id: "",
  //       forecast: forecastData || [],
  //     })
  //     ),[forecastData,dispatch]
  // )

  // useEffect(() => {
  
  //     if(forecastData){
  //       calfun()
  //     }
  // }, [dispatch,forecastData]);
  return (
    <React.Fragment>
      <img src={background} alt="Homepage clouds"/>
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
