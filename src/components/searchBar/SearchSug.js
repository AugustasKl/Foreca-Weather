import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchItem from './SearchItem'
import classes from './SearchSug.module.css'

const SearchSug=(props)=>{

    return(
        <nav className={classes.nav}>
            <ul>
               {props.data.map((region)=>{
                   return <SearchItem
                   id={region.id}
                   key={region.id}
                   name={region.name}
                   city={region.city}
                   country={region.country}
                   />
               })}
            </ul>
        </nav>
    )
            }
export default SearchSug