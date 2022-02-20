import styled from "styled-components";
import { Link } from "react-router-dom"

export const HeaderContainer=styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 3rem;
background-color: #8a2b06;
background-image:linear-gradient(to right bottom, pink, rgba(165, 165, 247, 0.918));
text-align: center;
font-size: 2rem;
z-index: 2;
`

export const LinkContainer=styled(Link)`
color:black;
`