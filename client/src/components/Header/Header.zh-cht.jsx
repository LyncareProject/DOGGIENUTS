import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./../Header/Header.css";

import Logo from "./../../assets/img/Doggilogo.jpg";

const HeaderZhCht = () => {
  return (
    <div className="Header">
      <Link to="/zh-cht" className="H_logo">
        <img src={Logo} alt="lyncarelogo" />
      </Link>
      <nav className="gnb_nav">
        <ul>
          <li className="dep1">
            <Link to="/zh-cht">
              <span>首頁</span>
            </Link>
          </li>

          <li className="dep1">
            <Link to="/zh-cht/about-us">
              <span>關於我們</span>
            </Link>
          </li>

          <li className="dep1">
            <Link to="/zh-cht/contact">
              <span>聯繫</span>
            </Link>
          </li>
        </ul>
        <p className="N_bg"></p>
      </nav>
    </div>
  );
};

export default HeaderZhCht;
