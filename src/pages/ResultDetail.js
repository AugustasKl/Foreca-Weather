import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchDailyObservations,fetchLatestObservations} from "../components/lib/api";
import ForecastResults from "../components/results/ForecastResults/ForecastResults";
import ResultId from "../components/results/ResultId/ResultId";


const ResultDetail = () => {
  const dispatch = useDispatch();
  const resultsData = useSelector((state) => state.currentData);
  const params = useParams();


  useEffect(() => {
    dispatch(fetchLatestObservations(params.resultsId));
      dispatch(fetchDailyObservations(params.resultsId));
  }, [dispatch, params.resultsId]);



  return (
    <React.Fragment>
      <ResultId
        temperature={resultsData.temperature}
        message={resultsData.message}
        feelsLike={resultsData.feelsLike}
      />
      <ForecastResults />
    </React.Fragment>
  );
};
export default ResultDetail;
