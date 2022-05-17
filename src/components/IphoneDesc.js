import React, {useState, useNavigate} from 'react'
import Back4 from '../images/back1.jpg'
import '../styles/IphoneDesc.css'
import Vid from '../images/pizzaWeb.mp4'
import IphoneW from '../images/car1.png'
import ReactPlayer from 'react-player'
import {FaGithub} from 'react-icons/fa'



function IphoneDesc() {
    
  return (
    <div className="iphone" style={{backgroundImage: `url(${Back4})`}}>
      <div className="player-wrapper">
     <video 
     className="vid"
     src={Vid} 
     controls={true}></video>
  <div className="buttons">
  <button className="button" onClick={() => {window.open('https://github.com/mili288/Tony-s-Pizza')}}>Github Repo</button>
  <button className="button" onClick={() => {window.open('https://626cebcbecf39747c6e61ec8--jazzy-syrniki-c2dfaa.netlify.app/')}}>Live View</button>

  <div className="desc">
  <p>E-Commerce website made with react, redux, 
    mostly css for styling but i've also used a bit of Material UI for the icons, 
    and bootstrap for some of the buttons. 
    Note: "In the live view the payment does not work since the server is only hosted in my local machine but i've provided a video above."</p>
  </div>
  </div>
  
</div>
</div>
  )
}

export default IphoneDesc