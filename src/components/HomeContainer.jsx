import React from 'react'
import { styled } from 'styled-components';
import TypedTextComponent from './TypedTextComponents';
const HomeContainer = (props) => {
  return (
    <Maincontainer id="home">
      <img src={`./images/${props.theme}.png`} alt="main logo"/>
      <TextContainer>
      <h1>Hi I am </h1> 
      <h2><TypedTextComponent /></h2>
      </TextContainer>
      </Maincontainer>
  )
}

export default HomeContainer

const Maincontainer =styled.div`
img{
  display: flex;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  justify-content:center;
  align-items:center;
  opacity: 80%;
  width:60%;
}
#Light img{
  background: linear-gradient(180deg, #1E1E1E 54.96%, rgba(30, 30, 30, 0.00) 100%);}
#Dark img{
  background: linear-gradient(180deg, #ffffff 54.96%, rgba(30, 30, 30, 0.00) 100%);
}
@media (0<width<629px) {
  img{
    margin-top:15%;
    width:100%;
  }
}
`; 
const TextContainer =styled.div`
display:flex;
  gap:15px;
 margin-left: 10%;
  margin-right: 1;
  margin-top: 2%;
  justify-content:center;
  align-items:center;
  h2,h1{
  font-size: 6rem;
  font-weight: 700;
}
@media (0<width<1175px) {
  flex-direction:column;
  font-size: 4rem;
  h2,h1{
  font-size: 2rem;
}
}
@media (0<width<500px) {
  flex-direction:row;
  font-size: 4rem;
  h2,h1{
  font-size: 1.75rem;
}
}

`;



