import styled from "styled-components";
import { Link } from "react-router-dom"


export const CityDataContainer=styled.div`
display: flex;
flex-direction: row;
color: black;
`

export const ListContainer=styled.div`
list-style-type: none;
padding: 0.2rem 0;
width: 100%;
margin-left: 1rem;
`

export const LinkContainer=styled(Link)`
display:flex;
align-items:center;
margin-left:0.7rem;
`