import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forecastActions } from '../../redux/forecast-slice'
import { weatherActions } from '../../redux/location-slice'
import { fetchLatestObservations, fetchSearchReqeust } from '../lib/api'
import SearchSug from './SearchSug'
import { SearchPageContainer, LabelContainer, InputContainer, ButtonContainer, ErrorContainer} from './Search.styles'
import PreviuosResults from '../results/PreviousResults/PreviuosResults'

const Search=()=>{
    const dispatch=useDispatch()
    const searchData=useSelector((state)=>state.weather)
    console.log(searchData.data)
    const [enteredSearch, setEnteredSearch]=useState('')
    // const [enteredSearchTouched, setEnteredSearchTouched]=useState(false)

    const number = +enteredSearch.match(/\d+/g);
    const symbols= enteredSearch.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g)
    const enteredSearchIsValid= enteredSearch.length<=30 && !Number(number) && !symbols

    const searchInputChangeHandler=(event)=>{
        setEnteredSearch(event.target.value)
        console.log(enteredSearch)
    }
    const formSubmissionHandler =(event)=>{
        event.preventDefault()
        console.log(enteredSearch)
        dispatch(fetchSearchReqeust(enteredSearch))
        setEnteredSearch('')
        dispatch(weatherActions.replaceDataHandler({
            data:[]
        }))
    }

    
    
    return(
        <SearchPageContainer onSubmit={formSubmissionHandler}>
            <LabelContainer htmlFor='name'>Search City</LabelContainer>
            <InputContainer type='text'
            id='name'
            onChange={searchInputChangeHandler}
            value={enteredSearch}
            />
                <ButtonContainer disabled={!enteredSearchIsValid} >Search</ButtonContainer>
            {!enteredSearchIsValid && <ErrorContainer> Search input can only contain letters</ErrorContainer>}
            <SearchSug data={searchData.data} />
            <PreviuosResults/>
        </SearchPageContainer>

    )
}

export default Search