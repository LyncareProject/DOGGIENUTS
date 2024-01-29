import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './../Header/Header.css'

import Logo from './../../assets/img/Doggilogo.jpg'

const Header = () => {
  return (
    <div className="Header">
        <Link to="/" className="H_logo">
        <img src={Logo} alt="lyncarelogo" />
      </Link>
     <nav className="gnb_nav">
        <ul>
        <li className="dep1">
            <Link to="/">
              <span>HOME</span>
            </Link>
          </li>

          <li className="dep1">
            <Link to="/AboutUs">
              <span>ABOUT US</span>
            </Link>
          </li>
    
          <li className="dep1">
            <Link to="/Contact">
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
        <p className="N_bg"></p>
      </nav>
    </div>
  )
}


export default Header
