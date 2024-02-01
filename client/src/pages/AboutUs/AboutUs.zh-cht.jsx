import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";

import WEARE from "./../../assets/img/AboutUs/WEARE.png";
import Weare_bg from "./../../assets/img/AboutUs/Weare_bg.png";
import K_petfair from "./../../assets/img/AboutUs/K_petfair.png";
import History from "./../../assets/img/AboutUs/History.png";
import History_bg from "./../../assets/img/AboutUs/History_bg.png";
import Currentsituation from "./../../assets/img/AboutUs/Currentsituation.png";
import Currentsituation_bg from "./../../assets/img/AboutUs/Currentsituation_bg.png";
import Currentsituation_bg1 from "./../../assets/img/AboutUs/Currentsituation_bg1.png";
import Currentsituation_bg2 from "./../../assets/img/AboutUs/Currentsituation_bg2.png";
import open_bracket from "./../../assets/img/AboutUs/open_bracket.png";
import close_bracket from "./../../assets/img/AboutUs/close_bracket.png";

const AboutUsZhCht = () => {
  return (
    <div className="wrap">
      <div className="flex__1">
        <div className="seciton_1">
          <p>
            <img src={Weare_bg} alt="Photo of a dog biting a DOGGIENUTS" />
          </p>
        </div>
        <div className="section_1Text">
          <p id="open_bracket">
            <img src={open_bracket} alt="open_bracket" />
          </p>
          <div className="section__1Text">
            <h3>【株】狗狗甜甜圈-健康&營養 </h3>
            <hr></hr>
            <p>
              我們通過使用來自大自然的營養均衡食品， 實現寵物的健康和營養，
              讓寵物與家人一起健康長壽，
              我們提供寵物的健康和營養的整體解決方案。
            </p>
          </div>
          <p className="WEARE">
            <img src={WEARE} alt="WAREA" />
          </p>
          <p id="WEAREA_close_bracket">
            <img src={close_bracket} alt="close_bracket" />
          </p>
        </div>
      </div>

      <div className="seciton_2">
        <p className="K_petfair">
          <img src={K_petfair} alt="K_petfair Mega Zoo" />
        </p>
        <div>
          <p className="seciton_2Text">
            <span>狗狗甜甜圈 燉菜</span> 在韓國最大的寵物展 K-PET
            FAIR榮獲“年度新產品”第一名。
            這是一項完全由消費者投票決定的具有重大意義的獎項。
          </p>
          <p className="close_bracket">
            <img src={close_bracket} alt="close_bracket" />
          </p>
        </div>
      </div>

      <div className="seciton_3">
        <h3>
          <img src={History} alt="History" />
        </h3>
        <div className="seciton_3_flex">
          <p className="seciton_3border"></p>

          <ul className="seciton_3Text">
            <li>
              2016.05 &nbsp; Doggienuts Brand Planning Selected and awarded at
              the Naver Entrepreneurial Idea Competition
            </li>
            <li>
              2017.02 &nbsp; Launch of <span>'Dancing Doggienuts,'</span> a
              specialized natural pet food brand
            </li>
            <li>
              2017.03 &nbsp; Release of the unprecedented natural donut{" "}
              <span>'Doggienuts'</span> and commencement of online and offline
              sales
            </li>
            <li>2017.05 &nbsp; Introduction of 'Doggienuts' cheese line</li>
            <li>
              2018.01 &nbsp; Release of <span>'Doggienuts Chips,'</span> a chewy
              and Hard dry form of natural dog treats
            </li>
            <li>
              2020.06 &nbsp; Launch of the industry's first insect protein
              natural dog treats, <span>'Buggienuts'</span> (Achieved highest
              single-brand sales at Lotte Department Store Pet Section).
            </li>
            <li>
              2021.02 &nbsp; Lotte Department Store X Dognut collaboration
              event; Lotte ON Mall's entire menu sells out early
            </li>
            <li>
              2022.11 &nbsp; Release of new menu <span>'Doggienut Stew'</span>
              (1st place in the <span>'New Product of the Year'</span> category
              at the 2022 K Pet Fair Mega Show)
            </li>
          </ul>
        </div>
      </div>

      <div className="section_4">
        <h3>
          <img src={Currentsituation} alt="Currentsituation" />
        </h3>

        <div className="section_4flex">
          <div className="section_4_1">
            <p className="text_left">
              京畿道河南市第一狗狗甜甜圈LAB
              <br />
              第二狗狗甜甜圈LAB
            </p>
            <p className="Currentsituation_bg1">
              <img src={Currentsituation_bg1} alt="Currentsituation_bg1" />
            </p>
          </div>
          <div className="section_4_2">
            <p className="text_right">
              第一冷凍庫
              <br />
              第二冷凍庫
              <br />
              冷藏倉庫
              <br />
              <br />
              <br />
              直接進口肉類, 使用新鮮肉味
            </p>
            <p className="Currentsituation_bg2">
              <img src={Currentsituation_bg2} alt="Currentsituation_bg2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsZhCht;


