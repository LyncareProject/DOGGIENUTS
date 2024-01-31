import React, { useState, useEffect, useRef } from "react";

import Footer_logo from "./../../assets/img/Footer_logo.jpg";

import "./Footer.css";

const FooterChnZhCht = () => {
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
          <p>代表：金鍾植、蘇章永(海外事業本部長)</p>
          <p>電子郵箱：marketing@wevibe.co.kr</p>
        </div>
        <div className="Footer_flex2">
          <p>
            地址：67, Gasan digital 2-ro, Geumcheon-gu, Seoul, Republic of Korea
          </p>
        </div>

        <p>(C) wevibe Inc. 版權所有</p>
      </div>
    </div>
  );
};

export default FooterChnZhCht;
