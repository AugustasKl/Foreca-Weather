
import { CityDataContainer, ListContainer, LinkContainer } from "./PreviousItem.styles"
const PreviousItem=(props)=>{
    const{city,region, country, id}=props

    const cityDataHandler=()=>{
        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
        localStorage.setItem('region', region)
        localStorage.setItem('id', id)
    }

    return(
        <CityDataContainer>
            <ListContainer>
        <LinkContainer to={`/weather/${id}`} onClick={cityDataHandler}>
           <div>{city}, </div> 
            <div>{region}</div>
            <div>{country} </div>
        </LinkContainer>
        </ListContainer>
        </CityDataContainer>
    )
}

export default PreviousItem