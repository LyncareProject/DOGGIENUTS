import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ContactBar.css";

import dog1 from "./../../assets/img/dog1.png";

const ContactBar = () => {
  return (
    <div className="ContactBar">
      <p className="ContactBar_1">
        <Link to="/contact">
          <span>CONTACT US</span>
          <img className="dog1" src={dog1} alt="dog1" />
        </Link>
      </p>
    </div>
  );
};

export default ContactBar;
