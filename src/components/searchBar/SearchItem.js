import React from "react";
import classes from "./SearchItem.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestObservations } from "../lib/api";
import { weatherActions } from "../../redux/weather-slice";
import { Link } from "react-router-dom";
import { currentDataSliceActions } from "../../redux/currentData-slice";
const SearchItem = (props) => {
    const { name, city, country,id} = props;
  
    const dispatch=useDispatch()
//   dispatch(weatherActions.loadResultId({
//       resultId:id
//   }))
//   console.log(id);

const cityDataHandler=()=>{
    dispatch(currentDataSliceActions.cityHandler({
        city:name
    }))
    dispatch(currentDataSliceActions.countryHandler({
        country:country
    }))
    dispatch(currentDataSliceActions.regionHandler({
        region:city
    }))
}
 

  return (
    <React.Fragment>
      <Link className={classes.list} to={`/weather/${id}`} onClick={cityDataHandler}>
        <div className={classes.name}>{name}</div>
        <div className={classes.city}>{city}</div>
        <div className={classes.country}>{country}</div>
      </Link>
    </React.Fragment>
  );
};
export default SearchItem;
