import React, { useState, useEffect, useRef } from "react";

import Footer_logo from "./../../assets/img/Footer_logo.jpg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_address">
        <p>
          <img
            className="Footer_logo"
            src={Footer_logo}
            alt="DOGGIENUTS Footer_logo"
          />
        </p>
        <p className="Footer_border"> </p>

        <div className="Footer_flex1">
          <p>
            Commercial Representative : Alex Kim, David So(Head of Overseas
            Business)
          </p>
          <p>E-mail : petsmealfarm@naver.com</p>
        </div>
        <div className="Footer_flex2">
          <p>
            Address : 67, Gasan digital 2-ro, Geumcheon-gu, Seoul, Republic of
            Korea
          </p>
        </div>

        <p>(C) wevibe Inc. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
