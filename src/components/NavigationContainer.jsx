import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import ReactSwitch from 'react-switch'

function rehome() {
    location.href='#home'
}

const NavigationContainer = (props) => {
  return (
    <nav>
    <NavContainer>
        <div className='modeContainer'>
            <h4>{props.theme} mode</h4>
        <ReactSwitch onChange={props.toggleTheme} checked = {props.theme === "Dark"}/>
        </div>
        <div className='VPavan'> <h4>V Pavan</h4></div>
        <div className='sectionContainer'>
            <ul>
                <li><a href="./#home">Home </a></li>
                <li><a href="./#project">Projects</a></li>
                <li><a href="./#about">About</a></li>
            </ul>
        </div>
    </NavContainer>
    </nav>
  );
};

export default NavigationContainer;

const NavContainer=styled.nav`
z-index:100;
display: flex;
justify-content: space-between;
align-items:center;
height:72px;
padding:0.48rem 1rem;
position:fixed;
top:0;
background-color:"#939090";
width:100%;
.sectionContainer ul{
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:7.06rem;
    list-style:none;
    font-size: 1.25rem;
    font-weight: 500;
    margin-right:30px;
}
.sectionContainer ul li{
    &:hover{
        font-weight:700;
    }} 
.sectionContainer ul li a{
  color:black;
  text-decoration:none;
}
.modeContainer{
    display:flex;
    gap:8px;
}
.VPavan{
        display:none;
    }
@media (0<width<629px) {
    font-size:0.75rem;
    justify-content:space-evenly;
    margin-right:3px;
    .VPavan{
        font-size:1.5rem;
        display:block;
    }
    padding:0;
    .sectionContainer ul{
    display:none;
}
}
`;