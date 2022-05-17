import React from 'react'
import Back2 from '../images/back1.jpg'
import '../styles/Work.css'
import recipeW from '../images/recipeWebsite.png'
import pizzaWeb from '../images/pizzaMili.png'
import {useNavigate} from 'react-router-dom'
import rec from '../images/recipeW.png'
import News from '../images/newsWebsite.png'
import Valorant from '../images/valorant1.png'

function Work() {
  const navigate = useNavigate();
  return (
    <div className="work" style={{backgroundImage: `url(${Back2})`}}>
       <div className="wrapper">
<div className="card"><img src={pizzaWeb}/>
    <div className="info">
      <h1>E-Commerce Store</h1>
      <p>E-Commerce Store made with React, Redux, Css, MUI and Bootstrap.</p>
      <button onClick={() => navigate('/work/1')}>See More</button>
    </div>
    </div>
    
    <div className="card"><img src={Valorant}/>
    <div className="info">
      <h1>Valorant Guide</h1>
      <p>A valorant guide website made with firebase auth and a valorant api.</p>
      <button onClick={() => navigate('/work/4')}>See More</button>
  </div>
  </div>

  <div className="card"><img src={News}/>
    <div className="info">
      <h1>News Website</h1>
      <p>News Website made with a news API and bootstrap. </p>
      <button onClick={() => navigate('/work/2')}>See More</button>
  </div>
  </div>

  <div className="card"><img src={rec}/>
    <div className="info">
      <h1>Recipe Website</h1>
      <p>Recipe Website made with react and bootstrap.</p>
      <button onClick={() => navigate('/work/3')}>See More</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Work