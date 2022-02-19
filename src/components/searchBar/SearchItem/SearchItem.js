import React from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../../redux/weather-slice";
import { currentDataSliceActions } from "../../../redux/currentData-slice";
import { LinkContainer } from "./SearchItem.styles";

const SearchItem = (props) => {
    const { name, city, country,id} = props;
  
    const dispatch=useDispatch()

const cityDataHandler=()=>{
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
