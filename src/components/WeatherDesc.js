import React from 'react'
import Back5 from '../images/back1.jpg'
import Vid2 from '../images/NewsWebsite.mp4'

function WeatherDesc() {
  return (
    <div className="iphone" style={{backgroundImage: `url(${Back5})`}}>
      <div className="player-wrapper">
     <video 
     className="vid"
     src={Vid2} 
     controls={true}></video>
  <div className="buttons">
  <button className="button" onClick={() => {window.open('https://github.com/mili288/ExpressNews')}}>Github Repo</button>

  <div className="desc">
  <p>News Website made with a news API and bootstrap.
    NOTE: There's not a live view for this project because the news API i used does not allow production build websites without paying for it so im showing a video from localhost.
  </p>
  </div>
  </div>
  
</div>
</div>
  )
}

export default WeatherDesc