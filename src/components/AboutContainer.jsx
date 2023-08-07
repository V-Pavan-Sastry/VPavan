import React from 'react'
import styled from 'styled-components'
import {FiFigma} from 'react-icons/fi'
import {BiLogoGithub} from 'react-icons/Bi'
import {BsLinkedin} from 'react-icons/Bs'

function redirectcv() {
    window.location.href = 'https://www.canva.com/design/DAFpYSHeqKg/-MNmzRyiVPGUJo8RH3jv7Q/view?utm_content=DAFpYSHeqKg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink';
}
function redirectdes() {
    window.location.href = 'https://www.figma.com/file/rzN2WdQK03bvGYbD0FkwU8/Portfolio?type=design&node-id=0%3A1&mode=design&t=kUbaL9g5qS1WanZy-1';
}
function redirectlin() {
    window.location.href = 'https://www.linkedin.com/in/v-pavan-94729b1b0';
}
function redirectgit() {
    window.location.href = 'https://github.com/V-Pavan-Sastry';
}
const AboutContainer = () => {
    
  return (
    <Aboutcontainer id="about">
        <h6>About Me</h6>
        <AboutBox>
        <div className='Aboutbox'>
            <div className="myimage">
                <img src=".\images\mypic.png"/>
            </div>
            <div className="links1">
                <h6 onClick={redirectgit}><BiLogoGithub/>  My Github</h6>
                <h6 onClick={redirectlin}><BsLinkedin/>  My LinkedIn</h6>
                <h6>pavanv180402@gmail.com</h6>
            </div>
            <div className="links2">
                <h6 onClick={redirectdes}><FiFigma/>  Figma Design of this WebPage</h6>
                <button className='Button' onClick={redirectcv}>View My CV</button>
            </div>
        </div>
        </AboutBox>
    </Aboutcontainer>
  )
}

export default AboutContainer

const Aboutcontainer = styled.div`
padding-bottom:3%;
h6{
font-size: 48px;
font-weight: 500;
margin: 3% 5%;
}
@media (0<width<500px) {
    h6{
        font-size:1.25rem;
        margin: 2% 33%;
    }
}`;
const AboutBox = styled.div`
margin:auto 5%;   
.Aboutbox{
display : flex;
flex-direction:row;
border-radius: 20px;
border: 2px solid black;
color:rgb(120, 0, 120);
justify-content:space-between;
align-items:center;
padding: 2% 2%;
}
.links1 ,.links2{
    display: flex;
    flex-direction:column;
}
.links1 h6{
font-size: 34px;
}
.links2 h6{
    font-size: 30px;
}
.Button{
background-color:white;
border-radius: 8px;
font-size: 30px;
max-width:50%;
align-self:center;
margin: 5% 2%;
padding:1%;
border: 2px solid rgb(120, 0, 120);
color:rgb(120, 0, 120);
}
@media (0<width<1155px) {
    .Aboutbox{
        flex-direction:column;
        min-width:55%;
    }
    .links1,.links2{
        margin-top:2%;
        align-items:center;
        justify-content:center;
        display:flex;
    }
    .links1 h6,.links2 h6{
        font-size:20px;
    }
    .Button{
        font-size:24px
    }
}
`;