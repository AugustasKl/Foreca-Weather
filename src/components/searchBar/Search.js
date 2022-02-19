import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forecastActions } from '../../redux/forecast-slice'
import { weatherActions } from '../../redux/weather-slice'
import { fetchLatestObservations, fetchSearchReqeust } from '../lib/api'
import classes from './Search.module.css'
import SearchSug from './SearchSug'

const Search=()=>{
    const dispatch=useDispatch()
    const searchData=useSelector((state)=>state.weather)
    console.log(searchData.data)
    const [enteredSearch, setEnteredSearch]=useState('')
    // const [enteredSearchTouched, setEnteredSearchTouched]=useState(false)

    const number = +enteredSearch.match(/\d+/g);
    const symbols= enteredSearch.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g)
    const enteredSearchIsValid= enteredSearch.length<=30 && !Number(number) && !symbols

    // console.log(matches)
    // console.log(enteredSearchIsValid)
    const searchInputChangeHandler=(event)=>{
        setEnteredSearch(event.target.value)
        console.log(enteredSearch)
    }
    const formSubmissionHandler =(event)=>{
        event.preventDefault()
        console.log(enteredSearch)
        dispatch(fetchSearchReqeust(enteredSearch))
        setEnteredSearch('')
    }


    
    
    return(
        <form onSubmit={formSubmissionHandler}>
            <label htmlFor='name'>Search City</label>
            <input type='text'
            className={classes.search}
            id='name'
            onChange={searchInputChangeHandler}
            value={enteredSearch}
            />
            <div className={classes.actions}>
                <button >Search</button>
            </div>
            {!enteredSearchIsValid && <p className={classes.error}> Search input can only contain letters</p>}
            <SearchSug data={searchData.data} />
        </form>
    )
}

export default Search