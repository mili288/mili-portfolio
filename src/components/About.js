import React from 'react'
import Back from '../images/back1.jpg'
import '../styles/About.css'
import {FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNpm, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiStyledcomponents, SiChakraui, SiMaterialui, SiFirebase} from "react-icons/si";

function About() {
  return (
    <div className="about" style={{backgroundImage: `url(${Back})`}}>
      <div className="container">
      <h1>More About Me</h1>
      <p>Hello i'm Valmir a React developer. 
        Im really dedicated and a fast learner. 
        For now i mostly do Front End development but i would like to dabble into Back End more in the future. 
        I like creating clean and responsive websites. My future goals are to learn more Back End and React Native.</p>
      <p className="p2">Languages, libraries and tools i currently use and have used before:</p>
      <div className="icon-container">
      <SiJavascript className="react"/><FaReact className="react"/><FaHtml5 className="react"/><FaCss3Alt className="react"/><SiRedux className="react"/><FaBootstrap className="react"/><SiStyledcomponents className="react"/><FaNpm className="react"/><SiChakraui className="react"/><FaGitAlt className="react"/>
      <FaGithub className="react"/><SiMaterialui className="react"/><SiFirebase className="react"/>
      </div>
      <div className="button-container">
      <button className="button" onClick={()=>{window.open('https://drive.google.com/file/d/1aEB4W61JsaO9pwq___VEVIZCchrtUxsh/view?usp=sharing')}} >My Resume</button>
      </div>
      </div>
    </div>
  )
}

export default About