import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";


import WEARE from './../../assets/img/AboutUs/WEARE.png'
import Weare_bg from './../../assets/img/AboutUs/Weare_bg.png'
import K_petfair from './../../assets/img/AboutUs/K_petfair.png'
import History from './../../assets/img/AboutUs/History.png'
import History_bg from './../../assets/img/AboutUs/History_bg.png'
import Currentsituation from './../../assets/img/AboutUs/Currentsituation.png'
import Currentsituation_bg from './../../assets/img/AboutUs/Currentsituation_bg.png'
import Currentsituation_bg1 from './../../assets/img/AboutUs/Currentsituation_bg1.png'
import Currentsituation_bg2 from './../../assets/img/AboutUs/Currentsituation_bg2.png'
import open_bracket from './../../assets/img/AboutUs/open_bracket.png'
import close_bracket from './../../assets/img/AboutUs/close_bracket.png'

const AboutUs = () => {
  return (
    <div className="wrap">
      <div className="flex__1">
         <div className='seciton_1'>
            <p><img src={Weare_bg} alt="Photo of a dog biting a DOGGIENUTS" /></p>
          </div>
          <div className="section_1Text">
                <p id="open_bracket"><img src={open_bracket} alt="open_bracket" /></p>
                <div className="section__1Text">
                  <h3>DOGGIENUTS HEALTH & NUTRITON Co.,LTD. </h3>
                  <hr></hr>
                  <p>We offer a <span>total solution for your pet’s health and nutrition</span> with naturally 
                  balanced foods to help your pet live a long, healthy life with your family</p>
                
                </div>
                <p className="WEARE"><img src={WEARE} alt="WAREA" /></p>
                <p id="WEAREA_close_bracket"><img src={close_bracket} alt="close_bracket" /></p>
          </div>
      </div>

        <div className="seciton_2">
            <p className="K_petfair"><img src={K_petfair} alt="K_petfair Mega Zoo" /></p>
            <div>
              <p className="seciton_2Text"><span>Doggienuts Stew</span> was awarded 1st place for “New Product of the Year” at the K-PET FAIR,
              the largest pet fair in Korea. this was a significant achievement based solely on consumer votes.</p>
              <p className="close_bracket"><img src={close_bracket} alt="close_bracket" /></p>
            </div>
        </div>

        <div className="seciton_3">
            <h3><img src={History} alt="History" /></h3>
            <div className="seciton_3_flex">
             
              <p className="seciton_3border"></p>
            
              <ul className="seciton_3Text">
                <li>2016.05&nbsp; 
                  <ol>
                    <li> Doggienuts Brand Planning Selected and awarded at the Naver Entrepreneurial Idea Competition</li>
                  </ol> 
                </li>
                <li>2017.02 &nbsp; 
                  <ol>
                    <li> Launch of <span>'Dancing Doggienuts,'</span> a specialized natural pet food brand</li>
                  </ol>
                </li>
                <li>2017.03 &nbsp; 
                  <ol>
                    <li> Release of the unprecedented natural donut <span>'Doggienuts'</span> and commencement of online and offline sales</li>
                  </ol>
                </li>
                <li>2017.05 &nbsp; 
                  <ol>
                    <li> Introduction of 'Doggienuts' cheese line</li>
                  </ol>
                </li>
                <li>2018.01 &nbsp; 
                  <ol>
                    <li> Release of <span>'Doggienuts Chips,'</span> a chewy and Hard dry form of natural dog treats</li>
                  </ol>
                </li>
                <li>2020.06 &nbsp; 
                  <ol>
                    <li> Launch of the industry's first insect protein natural dog treats, <span>'Buggienuts'</span> (Achieved highest single-brand sales at Lotte Department Store Pet Section).</li>
                  </ol>
                </li>
                <li>2021.02 &nbsp; 
                  <ol>
                    <li> Lotte Department Store X Dognut collaboration event; Lotte ON Mall's entire menu sells out early</li>
                  </ol>
                </li>
                <li>2022.11 &nbsp; 
                  <ol>
                    <li> Release of new menu <span>'Doggienut Stew'</span>(1st place in the <span>'New Product of the Year'</span> category at the 2022 K Pet Fair Mega Show)</li>
                  </ol>
                </li>
              </ul>
            </div>
       
        </div>

        <div className="section_4">
              <h3><img src={Currentsituation} alt="Currentsituation" /></h3>
          
            <div className="section_4flex">
                <div className="section_4_1">
                  <p className="text_left">1st Doginut Lab in Hanam-city <br/>
                    Operation of 2nd Doginut Lab</p>
                  <p className="Currentsituation_bg1"><img src={Currentsituation_bg1} alt="Currentsituation_bg1" /></p>
                </div>
                <div className="section_4_2">
                  <p className="text_right">Freezer Warehouse<br/>
                    second Freezer Warehouse<br/>
                    Cold Storage</p>
                  <p className="Currentsituation_bg2"><img src={Currentsituation_bg2} alt="Currentsituation_bg2" /></p>
                </div>    
            </div>  
      
          
     
        </div>
      
    </div>
  )
}

export default AboutUs
