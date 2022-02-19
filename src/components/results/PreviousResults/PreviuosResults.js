import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { visitedActions } from "../../../redux/visited-slice";
import PreviousItem from "../PreviousItem/PreviousItem";
import {
  HeaderContainer,
  ListContainer,
  ButtonContainer,
} from "./PreviuosResults.styles";

const PreviuosResults = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.visited.data);
  const city = localStorage.getItem("city");
  const region = localStorage.getItem("region");
  const country = localStorage.getItem("country");
  const id = localStorage.getItem("id");

  let showData = false;

  if (id) {
    dispatch(
      visitedActions.addDataToArray({
        id,
        region,
        country,
        city,
      })
    );
    showData = true;
  }

  useEffect(() => {
    if (data !== []) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);
  const storageWeatherData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    dispatch(
      visitedActions.replaceData({
        data: storageWeatherData || [],
      })
    );
  }, [dispatch]);

  const clearDataHandler = () => {
    dispatch(
      visitedActions.replaceData({
        data: [],
      })
    );
    localStorage.removeItem("city");
    localStorage.removeItem("country");
    localStorage.removeItem("region");
    localStorage.removeItem("id");
    localStorage.removeItem("data");
    showData = false;
  };
  return (
    <React.Fragment>
      {showData && (
        <HeaderContainer> Previously checked weather </HeaderContainer>
      )}
      <ListContainer>
        {data.map((region) => {
          return (
            <PreviousItem
              id={region.id}
              key={region.id}
              region={region.region}
              city={region.city}
              country={region.country}
            />
          );
        })}
        {showData && (
          <ButtonContainer onClick={clearDataHandler}>
            Clear previous results
          </ButtonContainer>
        )}
      </ListContainer>
    </React.Fragment>
  );
};

export default PreviuosResults;
