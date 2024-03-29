import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";

import WEARE from "./../../assets/img/AboutUs/WEARE.png";
import Weare_bg from "./../../assets/img/AboutUs/Weare_bg.jpg";
import K_petfair from "./../../assets/img/AboutUs/K_petfair.jpg";
import History from "./../../assets/img/AboutUs/History.png";
import Currentsituation from "./../../assets/img/AboutUs/Currentsituation.png";
import Currentsituation_bg1 from "./../../assets/img/AboutUs/Currentsituation_bg1.jpg";
import Currentsituation_bg2 from "./../../assets/img/AboutUs/Currentsituation_bg2.jpg";
import open_bracket from "./../../assets/img/AboutUs/open_bracket.png";
import close_bracket from "./../../assets/img/AboutUs/close_bracket.png";
import close_bracketLeft from "./../../assets/img/AboutUs/close_bracketLeft.png";
import OfficialsImg from "./../../assets/img/AboutUs/OfficialsImg.jpg";
import ContactBar from "../../components/ContactBar/ContactBar";

const AboutUs = () => {
  return (
    <div className="wrap">
      <ContactBar />
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
            <h3>DOGGIENUTS HEALTH & NUTRITON Co.,LTD. </h3>
            <hr></hr>
            <p>
              We offer a{" "}
              <span>total solution for your pet’s health and nutrition</span>{" "}
              with naturally balanced foods to help your pet live a long,
              healthy life with your family
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
            <h3><span>D</span>OGGIENUTS</h3>
            <p>Nutritionally balanced, meeting all 40 essential nutrient standards set by 
              the National Research Council (NRC), European Federation of the Companion Animal 
              Industry (FEDIAF), and the American Association of Feed Control Officials (AAFCO).
              <br />
              So it's Natural enough to be fed as a staple diet.
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
            <span>Doggienuts Stew</span> was awarded 1st place for “New Product
            of the Year” at the K-PET FAIR, the largest pet fair in Korea. this
            was a significant achievement based solely on consumer votes.
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
              1st Doginut Lab in Hanam-city <br />
              Operation of 2nd Doginut Lab
            </p>
            <p className="Currentsituation_bg1">
              <img src={Currentsituation_bg1} alt="Currentsituation_bg1" />
            </p>
          </div>
          <div className="section_4_2">
            <p className="textRight">
              Freezer Warehouse
              <br />
              second Freezer Warehouse
              <br />
              Cold Storage
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

export default AboutUs;
