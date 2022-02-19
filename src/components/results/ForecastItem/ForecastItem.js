import React from "react";
import { ItemContainer } from "./ForecastItem.styles";

const ForecastItem = (props) => {
  const { date, maxTemp, minTemp } = props;

  return (
    <React.Fragment>
      <ItemContainer>
        <div> {date}</div>
        <div>Day: {maxTemp} °C</div>
        <div>Night: {minTemp} °C</div>
      </ItemContainer>
    </React.Fragment>
  );
};

export default ForecastItem;
