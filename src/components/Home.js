import React from 'react'
import '../styles/Home.css';
import Me from '../images/MILIFIN.png';
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home" style={{backgroundImage: `url(${Me})`}}>
    <div className="headerContainer">
    <h1 className="title">Valmir Gojani</h1>
    <p>Front-End Developer</p>
    <p className="desc">Hello there i am Valmir and i am 22 year old Javascript/React Developer.
    </p>
  </div>
  <div className="content">
    <div className="content__container" onClick={() => navigate('/work')}>
    <p className="content__container__text">
    work
    </p>
      </div>
</div>
  </div>
  )
}

export default Home