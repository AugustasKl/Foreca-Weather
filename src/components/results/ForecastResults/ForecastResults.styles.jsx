import styled from "styled-components"

export const ForecastContainer=styled.div`
position: absolute;
top:30%;
width: 100%;

button{
    margin-left:3rem;
}
`

export const HeaderContainer=styled.h2`
padding-left: 2rem ;
`
export const ListContainer=styled.ul`
display:flex;

a{
    text-decoration: none;
}
`

export const ButtonContainer=styled.button`
padding: 0.5rem 1rem; 
 background-color: transparent;
 border-color: transparent;
 color:rgb(44, 44, 44);
 background-color: rgba(113, 113, 240, 0.918);
 border-radius: 20px;
 cursor: pointer;
 text-align: center;

 &:hover{
    background-color:rgb(44, 44, 44);
    color: rgba(113, 113, 240, 0.918); 
 }
`

