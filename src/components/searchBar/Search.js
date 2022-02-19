import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { weatherActions } from '../../redux/weather-slice'
import { fetchSearchReqeust } from '../lib/api'
import SearchSug from './SearchSuggestions/SearchSug'
import { SearchPageContainer, LabelContainer, InputContainer, ButtonContainer, ErrorContainer} from './Search.styles'
import PreviuosResults from '../results/PreviousResults/PreviuosResults'

const Search=()=>{
    const dispatch=useDispatch()
    const searchData=useSelector((state)=>state.weather.data)
    const [enteredSearch, setEnteredSearch]=useState('')

    const number = +enteredSearch.match(/\d+/g);
    const symbols= enteredSearch.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g)
    const enteredSearchIsValid= enteredSearch.length<=30 && !Number(number) && !symbols

    const searchInputChangeHandler=(event)=>{
        setEnteredSearch(event.target.value)
    }

    const formSubmissionHandler =(event)=>{
        event.preventDefault()
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
            <SearchSug data={searchData} />
            <PreviuosResults/>
        </SearchPageContainer>

    )
}

export default Search