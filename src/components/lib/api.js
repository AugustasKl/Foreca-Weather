import { currentDataSliceActions } from "../../redux/currentData-slice";
import { forecastActions } from "../../redux/forecast-slice";
import  { locationActions } from "../../redux/location-slice";

const WEATHER_API = "https://foreca-weather.p.rapidapi.com/";


const fetchData=(url)=>{
  const sendRequest =fetch(url,{
    method: "GET",
    headers: {
      "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
      "x-rapidapi-key": 'f212bdea09msh0895a0ba7dbcfd1p1dd497jsn55e85ecf1dcc',
    },
  })      
return sendRequest
}


export const fetchSearchReqeust = (city) => {
  return async (dispatch) => {
    fetchData(`${WEATHER_API}/location/search/${city}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then(() => {
            throw new Error(`Fetching city's data failed`);
          });
        }
      })
      .then((data) => {
        console.log(data);
        const slicedArray = data.locations.slice(0, 5);
        slicedArray.forEach((el) => {
                dispatch(
                  locationActions.loadDataHandler({
                        id: el.id,
                        name: el.name,
                        city: el.adminArea,
                        country: el.country,
                    })
                    );
                });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const fetchLatestObservations = (id) => {
  return async (dispatch) => {
    fetchData(`${WEATHER_API}/current/${id}?tempunit=C`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then(() => {
            throw new Error('Fetching latest obeservations failed');
          });
        }
      })
      .then((data) => {
        console.log(data.current);
        dispatch(
          currentDataSliceActions.temperatureHandler({
            temperature: data.current.temperature,
          }));
        dispatch(
          currentDataSliceActions.messageHandler({
            message: data.current.symbolPhrase,
          }));
        dispatch(
          currentDataSliceActions.feelsLikeHandler({
            feelsLike: data.current.feelsLikeTemp,
          }));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const fetchDailyObservations = (id) => {
  return async (dispatch) => {
    fetchData(`${WEATHER_API}/forecast/daily/${id}?empunit=C&periods=7`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then(() => {
            throw new Error("Fetching daily observations failed");
          });
        }
      })
      .then((data) => {
        console.log(data.forecast)
        data.forecast.forEach((data) => {
          dispatch(
            forecastActions.loadForecastHandler({
              date: data.date,
              maxTemp: data.maxTemp,
              minTemp: data.minTemp,
              id:Math.random()
            })
            );
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
