import { currentDataSliceActions } from "../../redux/currentData-slice";
import { forecastActions } from "../../redux/forecast-slice";
import weatherSlice, { weatherActions } from "../../redux/weather-slice";

const WEATHER_API = "https://foreca-weather.p.rapidapi.com/";
export const fetchSearchReqeust = (city) => {
  return async (dispatch) => {
    fetch(`${WEATHER_API}/location/search/${city}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "439e62528cmshf560c05f8538261p1c58b1jsnca9a487f5d07",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then(() => {
            let errorMessage = "Fetch failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        const cityId = [...data.locations];
        const slicedArray = cityId.slice(0, 5);
        slicedArray.map((el) => {
          console.log(el.name, "-", el.adminArea, "-", el.country);
          dispatch(
              weatherActions.loadResultId({
                  resultId: el.id,
                })
                );
                dispatch(
                    weatherActions.loadDataHandler({
                        id: el.id,
                        name: el.name,
                        city: el.adminArea,
                        country: el.country,
                    })
                    );
                });
                return
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const fetchLatestObservations = (id) => {
  return async (dispatch) => {
    fetch(`${WEATHER_API}/current/${id}?tempunit=C`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "439e62528cmshf560c05f8538261p1c58b1jsnca9a487f5d07",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then(() => {
            let errorMessage = "Fetch failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data.current);
        dispatch(
          currentDataSliceActions.temperatureHandler({
            temperature: data.current.temperature,
          })
        );
        dispatch(
          currentDataSliceActions.messageHandler({
            message: data.current.symbolPhrase,
          })
        );
        dispatch(
          currentDataSliceActions.feelsLikeHandler({
            feelsLike: data.current.feelsLikeTemp,
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const fetchDailyObservations = (id) => {
  return async (dispatch) => {
    fetch(`${WEATHER_API}/forecast/daily/${id}?empunit=C&periods=7`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "439e62528cmshf560c05f8538261p1c58b1jsnca9a487f5d07",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then(() => {
            let errorMessage = "Fetch failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data.forecast)
        const copyData = [...data.forecast];
        console.log(copyData);
        data.forecast.map((data) => {
          dispatch(
            forecastActions.loadForecastHandler({
              date: data.date,
              maxTemp: data.maxTemp,
              minTemp: data.minTemp,
              id:Math.random()
            })
            );
            return
    //     dispatch(forecastActions.dateHandler({
    //         date: data.date
    //     }))
    //     dispatch(forecastActions.minTempHandler({
    //         minTemp:data.minTemp
    //     }))
    //     dispatch(forecastActions.maxTempHandler({
    //         maxTemp:data.maxTemp
    //     }))
    //     dispatch(forecastActions.idHandler({
    //         id:data.precipAccum
    //     }))
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
