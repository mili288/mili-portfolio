import React from 'react'
import Back6 from '../images/back1.jpg'
import Rec from '../images/recipeWebsiteV.mp4'

function RecipeDecs() {
  return (
    <div className="iphone" style={{backgroundImage: `url(${Back6})`}}>
      <div className="player-wrapper">
     <video 
     className="vid"
     src={Rec} 
     controls={true}></video>
  <div className="buttons">
  <button className="button" onClick={() => {window.open('https://github.com/mili288/Recipe')}}>Github Repo</button>
  <button className="button" onClick={() => {window.open('https://626cfcf77b18fe4ee6a8ec08--vocal-choux-2989b5.netlify.app/')}}>Live View</button>

  <div className="desc">
  <p>A recipe website made with React, Css and Bootstrap.</p>
  </div>
  </div>
  
</div>
</div>
  )
}

export default RecipeDecs
