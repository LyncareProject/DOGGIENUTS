import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ContactBar.css";

import dog1 from "./../../assets/img/dog1.png";

const ContactBarZhCht = () => {
  return (
    <div className="ContactBar">
      <p className="ContactBar_1">
        <Link to="/Contact">
          <span>聯繫</span>
          <img className="dog1" src={dog1} alt="dog1" />
        </Link>
      </p>
    </div>
  );
};

export default ContactBarZhCht;
