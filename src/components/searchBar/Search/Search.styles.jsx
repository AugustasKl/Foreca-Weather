import styled from "styled-components";

export const SearchPageContainer=styled.form`
margin: 10rem auto;
text-align: center;
display: flex;
flex-direction: column;
width: 100%;
position: absolute;
top:0;
align-items: center;
`
export const LabelContainer=styled.label`
padding: 1rem;
font-size: 1.8rem;
color: #777;
`
export const InputContainer=styled.input`
margin-top: -0.5rem;
margin-bottom: 0.5rem;
border-radius: 10px;
padding: 0.5rem;
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

&:disabled,
&:disabled:hover,
&:disabled:active {
  background-color: rgb(44, 44, 44);
  color: rgba(113, 113, 240, 0.918); 
  border-color: rgb(44, 44, 44);
  cursor: not-allowed;
}
`
export const ErrorContainer=styled.p`
color: red;
`