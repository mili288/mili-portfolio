import React, {useState} from 'react'
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
import {FaAlignJustify} from 'react-icons/fa';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  

  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  };

  
  return (
  <div className="navbar">
       <div className="rightSide">
         <Link to="/"> Home </Link>
         <Link to="/about"> About </Link>
         <Link to="/work"> Work </Link>
         <Link to="/contact"> Contact </Link>
       </div>
  </div>
    );
}

export default Navbar