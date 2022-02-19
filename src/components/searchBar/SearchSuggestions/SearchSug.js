import SearchItem from '../SearchItem/SearchItem'
import { NavContainer } from './SearchSug.styles'
const SearchSug=(props)=>{

    return(
            <NavContainer>
               {props.data.map((region)=>{
                   return <SearchItem
                   id={region.id}
                   key={region.id}
                   name={region.name}
                   city={region.city}
                   country={region.country}
                   />
               })}
            </NavContainer>
    )
            }
export default SearchSug