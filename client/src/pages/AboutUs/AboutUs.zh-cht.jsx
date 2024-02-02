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
import close_bracketLeft from "./../../assets/img/AboutUs/close_bracketLeft.png";
import OfficialsImg from "./../../assets/img/AboutUs/OfficialsImg.png";

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

      <div className="section_Officials">
        <div className="section_OfficialsText">
          <div className="section_OfficialsText_1">
            <h3><span>D</span>OGGIENUTS <span>狗</span>狗甜甜圈</h3>
               <p>跳舞甜甜圈系列產品全部符合
                歐洲寵物產業聯合會(FFDIAF)、美國飼料管理協會(AAFCO)和
                美國國家研究委員會(NRC)所規定的40余種必須的營養標準。
              <br />
                是营养均衡的纯天然食品，可作为主食喂食。
              </p>
              <p className="WEAREA_close_bracket">
                <img className="" src={close_bracketLeft} alt="close_bracketLeft" />
              </p>
          </div>
      
        </div>    
      

       
        <div className="section_OfficialsImg">
          <p><img src={OfficialsImg} alt="DOGGIENUTS Certification datas" /></p>
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
              2016.05 &nbsp; 狗狗甜甜圈品牌企劃，NAVER創業項目競賽提拔及獲獎
            </li>
            <li>
              2017.02 &nbsp; 寵物自然食品專業品牌
              <span>"跳舞的狗狗甜甜圈"</span>
              上市
            </li>
            <li>
              2017.03 &nbsp; 世界上獨一無二的自然甜甜圈
              <span>"狗狗甜甜圈"</span>面世，開始線上、線下銷售
            </li>
            <li>2017.05 &nbsp; "狗狗甜甜圈"芝士系列上市</li>
            <li>
              2018.01 &nbsp; 耐嚼、堅韌的乾式形態的自然食品
              <span>"狗狗甜甜圈 脆片"</span>面世
            </li>
            <li>
              2020.06 &nbsp; 業界首次推出昆蟲蛋白質自然食
              <span>"蟲肉甜甜圈"</span>
              (樂天百貨店寵物單一品牌達成一天最高銷售額)
            </li>
            <li>
              2021.02 &nbsp; 樂天百貨商店 X
              狗狗甜甜圈合作活動進行，樂天ON商城所有菜單提前售罄
            </li>
            <li>
              2022.11 &nbsp; <span>狗狗甜甜圈新菜品， 推出擠着吃的燉菜</span>
              上市 (2022 K-Pet Fair Megazoo 新產品發佈會 食品部門
              <span>"年度新產品獎"</span>
              獲得第一名)
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


