import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchDailyObservations,
  fetchLatestObservations,
} from "../components/lib/api";
import ForecastResults from "../components/results/ForecastResults";
import ResultId from "../components/results/ResultId";
import { weatherActions } from "../redux/weather-slice";
import { forecastActions } from "../redux/forecast-slice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ResultDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const resultId=useSelector((state)=>state.weather.resultId)
  const resultsData = useSelector((state) => state.currentData);
  const forecast = useSelector((state) => state.forecast.forecast);
  console.log(forecast);
  const locationData = useSelector((state) => state.weather);
  // console.log(resultId)
  //   console.log(forecast);
  const params = useParams();
  console.log(params.resultsId);

  useEffect(() => {
    console.log("labas");
    dispatch(fetchLatestObservations(params.resultsId));
    if (resultsData) {
      dispatch(fetchDailyObservations(params.resultsId));
    }
  }, [dispatch, params.resultsId]);

  console.log("7777");



//   const data =useEffect(() => {
    
//      const dataArray = forecast.slice(7, 14);
//     return dataArray
//   }, [forecast]);
//  console.log(data)

  //   const slicedArray = forecast.slice(7, 14);

  //   console.log(slicedArray);
  // dispatch(forecastActions.loadForecastHandler({
  //     forecast: slicedArray
  // }))

  // // if(forecast.length>=14)return

  //   const ca = useCallback(() => {

  //         }, [forecast]);
  //   const emptyDataHandler = () => {

  //     // dispatch(
  //     //   forecastActions.loadForecastHandler({
  //     //     date: "",
  //     //     maxTemp: "",
  //     //     minTemp: "",
  //     //     id: "",
  //     //   })
  //     // );
  //     history.replace("/");
  //   };

  return (
    <React.Fragment>
      <ResultId
        temperature={resultsData.temperature}
        message={resultsData.message}
        feelsLike={resultsData.feelsLike}
      />
      <ForecastResults />
      {/* <button onClick={emptyDataHan dler}> back</button> */}
    </React.Fragment>
  );
};
export default ResultDetail;
