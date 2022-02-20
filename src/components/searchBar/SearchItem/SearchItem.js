import React from "react";
import { useDispatch } from "react-redux";
import { locationActions } from "../../../redux/location-slice";
import { LinkContainer, ListContainer } from "./SearchItem.styles";

const SearchItem = (props) => {
    const { name, city, country,id} = props;
  
    const dispatch=useDispatch()

const cityDataHandler=()=>{
    localStorage.setItem('city', name)
    localStorage.setItem('country', country)
    localStorage.setItem('region', city === null ? '': `${city},`)
    localStorage.setItem('id', id)

    dispatch(locationActions.replaceDataHandler({
      data:[]
  }))
}
 
  return (
    <React.Fragment>
      <LinkContainer to={`/weather/${id}`} onClick={cityDataHandler}>
      <ListContainer>
        <span>{name},</span>
        <span>{city === null ? '': `${city},`} </span>
        <span>{country}</span>
      </ListContainer>
      </LinkContainer>
    </React.Fragment>
  );
};
export default SearchItem;
