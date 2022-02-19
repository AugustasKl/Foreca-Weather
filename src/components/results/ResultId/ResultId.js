import React from "react";
import { ResultContainer, InfoContainer, CityDataContainer } from "./ResultId.styles";
const ResultId = (props) => {
  const { temperature, message, feelsLike } = props;
  const city=localStorage.getItem('city')
  const region=localStorage.getItem('region')
  const country=localStorage.getItem('country')
 

  return (
    <React.Fragment>
      <ResultContainer>
        <InfoContainer>
          <div>Current temperature:  {temperature} °C</div>
          <div>{message}</div>
          <div>Feels like:  {feelsLike} °C</div>
        </InfoContainer>
        <CityDataContainer>
          <div>{city},</div>
          <div>{region}</div>
          <div>{country}</div>
        </CityDataContainer>
      </ResultContainer>
    </React.Fragment>
  );
};

export default ResultId;
