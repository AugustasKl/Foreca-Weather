import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestObservations } from "../lib/api";
import { weatherActions } from "../../redux/location-slice";
import { Link } from "react-router-dom";
import { currentDataSliceActions } from "../../redux/currentData-slice";
import { LinkContainer } from "./SearchItem.styles";
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
    localStorage.setItem('city', name)
    localStorage.setItem('country', country)
    localStorage.setItem('region', city === null ? '': `${city},`)
    localStorage.setItem('id', id)

    dispatch(weatherActions.replaceDataHandler({
      data:[]
  }))
    

}
 

  return (
    <React.Fragment>
      <LinkContainer to={`/weather/${id}`} onClick={cityDataHandler}>
        <span>{name}</span>
        <span>{city === null ? '': `${city},`} </span>
        <span>{country}</span>
      </LinkContainer>
    </React.Fragment>
  );
};
export default SearchItem;
