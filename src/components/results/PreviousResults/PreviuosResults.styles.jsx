
import styled from "styled-components";

export const HeaderContainer=styled.h4`
margin: 0;
font-size: 1.5rem;
`

export const ListContainer=styled.ul`
height: 12rem;
width: 18rem;
text-align: center;
margin-left: -3rem;

a{
    text-decoration: none;
    color: black;
    display: flex;
    gap: 0.4rem;
    background-color: beige;
    padding: 0.5rem;
    border-radius: 16px;
    flex-wrap: wrap;
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
 margin-top:1rem;
 margin-left:1.5rem;
 &:hover{
    background-color:rgb(44, 44, 44);
    color: rgba(113, 113, 240, 0.918); 
 }
`