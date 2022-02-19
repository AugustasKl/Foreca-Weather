import classes from './ForecastResults.module.css'
import ForecastItem from './ForecastItem'
import { useDispatch, useSelector } from 'react-redux'
import { forecastActions } from '../../redux/forecast-slice'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const ForecastResults=(props)=>{
    const history=useHistory()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.forecast.forecast)
    
    dispatch(forecastActions.replaceForecasthHandler({
        forecast: data
    }))
    console.log(data)

    if(data.length===14){
        const splicedData= data.slice(7,14)
        dispatch(forecastActions.replaceForecasthHandler({
            forecast: splicedData
        }))
    }
console.log(props.data)
// const copyData=[...props.data]
// console.log(copyData)

const goBackHandler=()=>{
    history.replace('/')
}

    return(
        <div className={classes.forecast}>
              <h2>Daily Forecast</h2>
            <ul>
                {data.map((weather)=>{
                    return <ForecastItem
                        id={weather.id}
                        key={weather.id}
                        date={weather.date}
                        maxTemp={weather.maxTemp}
                        minTemp={weather.minTemp}
                    />
                })}
            </ul>
            <button onClick={goBackHandler}>Back</button>
        </div>
    )
}

export default ForecastResults