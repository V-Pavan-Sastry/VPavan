import styled from 'styled-components'
import { BiDesktop,BiLogoGithub} from 'react-icons/Bi';
import {MdWebAsset} from 'react-icons/md';
import React from 'react'

const jsondata = {
    "project": [
        {
            "title": "Registration Portal ",
            "content": "A Fully functional resposive Landing + Registration Page duo of a tech fest ,built to showcase flow eevent and provide a registration portal for attendees was devloped using Html, CSS and JS . The information filled is captured onto a google sheet using a API",  
            "codelink": "https://github.com/V-Pavan-Sastry/iact2023",
            "webpagelink": "https://v-pavan-sastry.github.io/iact2023/index.html",
            "imagelink": "./images/reg_por.png"
            
          },
      {
        "title": "Landing Page",
        "content": "A front end design of the landing page replica of nike designed for desktop view only built by simple utilizing css styling to understand compartmentalization in react framework.Crafted with meticulous attention to detail, the landing page showcases the brand's essence, enticing users with seamless interactions and stunning visuals.",  
        "codelink": "https://github.com/V-Pavan-Sastry/nike-desktop.git",
        "webpagelink": "https://v-pavan-sastry.github.io/nike-desktop/",
        "imagelink": "./images/shoe_image.png"
        
      },
      {
        "title": "Contact Page",
        "content": "Another front end design of the conatct page designed for desktop view only.It is built to understand how redunantive code can be eleminated by using .jsx files with props to make functionally accurate design.",
        "codelink":"https://github.com/V-Pavan-Sastry/ContactPage",
        "webpagelink":"https://v-pavan-sastry.github.io/ContactPage/",
        "imagelink": "./images/contact.svg"
      },{
        "title": "Dice Game",
        "content": "A Simple Project to understand passing of props in react, usage of styled-components and implementation of useState to build functions to execute the game logic.",
        "codelink":"https://github.com/V-Pavan-Sastry/dice_game.git",
        "webpagelink":"https://v-pavan-sastry.github.io/dice_game/",
        "imagelink": "./images/Dices.png"
      },
      
    ]
  }

const WorkBox = () => {
  return (
    <div>
        {jsondata.project.map((project) => (
        <Workbox key= {project.title}>
        <div className='box'>
        <div className='ImageContainer'>
            <img src={project.imagelink} alt="Project Image"/>
        </div>
        <div className='TextContainer'>
            <h3>{project.title}</h3>
            <p>{project.content}</p>
            <div className='links'>
            <a href={project.codelink}><h5><BiLogoGithub/> View Code</h5></a>
            <a href={project.webpagelink}><h5><MdWebAsset/> View WebPage</h5></a>
            </div>
        </div>
        </div>
    </Workbox>))}
    </div>
  )
}

export default WorkBox

const Workbox = styled.div`

    justify-content:space-between;
    align-items:center;
.box{
margin: 3.05% auto;
border-radius:20px;
width:80.35%;
height:52%;
display:flex;
border: 2px solid Black;}

.ImageContainer img{
width: 50vh;
border-radius:20px;
max-height:40vh;
justify-content:center;
align-items:center;
display:flex;
}
.TextContainer{
    margin-left:4.75rem;
    margin-right: 0.25rem;
}
.TextContainer p{
    font-size: 1.05rem;
    font-weight: 400;
    margin-top:0;
}

.links{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:80%;
    margin-top:4%;
    margin-right:10%;
    margin-left:10%;

}
.links h5{
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom:10px;
    margin-right:25px;
}
@media (0<width<931px) {
  .box{
    flex-direction:column;
    min-height:80.35%;
    min-width:41%;
  }
  .ImageContainer img{
width: 100%;}
  .TextContainer{
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    align-items:center;
    justify-content:center;
  }
  .links{
    margin-right:20%; 
  }
  .links h5{
    font-size: 1.00rem;
  }
}
`;