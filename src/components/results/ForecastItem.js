import React from 'react'
import { useDispatch } from 'react-redux'
import { forecastActions } from '../../redux/forecast-slice'
import classes from './ForecastItem.module.css'


const ForecastItem=(props)=>{
    const dispatch=useDispatch()
const{date, maxTemp, minTemp}=props


// if(minTemp){
//     dispatch(forecastActions.loadForecastHandler({
//  forecast:[]
//     }))
// }

    return(
      
        <React.Fragment>
        <li className={classes.item}>
            <div> {date}</div>
            <div>Day:  {maxTemp} °C</div>
            <div>Night:  {minTemp} °C</div>
        </li>
        
        </React.Fragment>
    )
}

export default ForecastItem