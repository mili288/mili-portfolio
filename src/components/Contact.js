import React from 'react'
import Back3 from '../images/back1.jpg'
import '../styles/Contact.css'
import {FaGithub} from 'react-icons/fa';
import {SiLinkedin} from 'react-icons/si';

function Contact() {
  return (
    <div className="work" style={{backgroundImage: `url(${Back3})`}}>
      <div>
        <h1 className="contact">Contact Me</h1> 
      <FaGithub onClick={() => window.open('https://github.com/mili288')} className="icons"/><SiLinkedin className="icons"/>
      </div>
      <div className="contact-container">
     <form 
     name="contact-form"
     method="POST"
     data-netlify="true"
     >      
     <input type="hidden" name="form-name" value="contact-form"/>
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="Send"/>
</form>
</div>
    </div>
  )
}

export default Contact