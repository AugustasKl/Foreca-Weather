import React from "react";
import classes from "./ResultId.module.css";
import { useSelector } from "react-redux";
const ResultId = (props) => {
  const { temperature, message, feelsLike } = props;
  console.log(temperature);
  const city = useSelector((state) => state.currentData.city);
  const country = useSelector((state) => state.currentData.country);
  const region = useSelector((state) => state.currentData.region);

  return (
    <React.Fragment>
      <div className={classes.result}>
        <div className={classes.info}>
          <div>Current temperature:  {temperature} °C</div>
          <div>{message}</div>
          <div>Feels like:  {feelsLike} °C</div>
        </div>
        <div className={classes.city}>
          <div>{city},</div>
          <div>{region},</div>
          <div>{country}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResultId;
