import ForecastItem from '../ForecastItem/ForecastItem'
import { useDispatch, useSelector } from 'react-redux'
import { forecastActions } from '../../../redux/forecast-slice'
import { useHistory } from 'react-router-dom'
import { ForecastContainer, HeaderContainer, ListContainer, ButtonContainer } from './ForecastResults.styles'
import { weatherActions } from '../../../redux/weather-slice'


const ForecastResults=()=>{
    const history=useHistory()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.forecast.forecast)
    
    dispatch(forecastActions.replaceForecasthHandler({
        forecast: data
    }))

    if(data.length===14){
        const splicedData= data.slice(7,14)
        dispatch(forecastActions.replaceForecasthHandler({
            forecast: splicedData
        }))
    }

const goBackHandler=()=>{
    dispatch(weatherActions.replaceDataHandler({
        data:[]
    }))
    history.replace('/')
}

    return(
        <ForecastContainer>
              <HeaderContainer>Daily Forecast</HeaderContainer>
            <ListContainer>
                {data.map((weather)=>{
                    return <ForecastItem
                        id={weather.id}
                        key={weather.id}
                        date={weather.date}
                        maxTemp={weather.maxTemp}
                        minTemp={weather.minTemp}
                    />
                })}
            </ListContainer>
            <ButtonContainer onClick={goBackHandler}>Back</ButtonContainer>
        </ForecastContainer>
    )
}

export default ForecastResults