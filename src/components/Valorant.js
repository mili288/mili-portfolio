import React from 'react'
import Back6 from '../images/back1.jpg'
import Vid6 from '../images/valorant.mp4';

function Valorant() {
  return (
    <div className="iphone" style={{backgroundImage: `url(${Back6})`}}>
 <div className="player-wrapper">
     <video 
     className="vid"
     src={Vid6} 
     controls={true}></video>
  <div className="buttons">
  <button className="button" onClick={() => {window.open('https://github.com/mili288/Valorant-Guide')}}>Github Repo</button>
  <button className="button" onClick={() => {window.open('https://62835d43f5c0ca4ddbba5ce2--cute-hamster-de0a85.netlify.app/')}}>Live View</button>

  <div className="desc">
  <p>
  Valorant Guide website made with a valorant api. I've used the firebase authentication in this project with 2 methods, email and password and a google method. For styling i've used vanilla css for 90% of the project and a little bit of bootstrap for the forms.
  </p>
  </div>
  </div>
  
</div>
    </div>
  )
}

export default Valorant