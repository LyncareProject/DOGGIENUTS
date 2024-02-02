import React, { useState, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PDF_FILE_URL } from "../../service/fileService";
import "swiper/css";
import "swiper/css/autoplay";
import mainBg from "../../assets/img/mainBg.png";
import yellow from "../../assets/img/yellow.png";
import yellowFlip from "../../assets/img/yellowFlip.png";
import yellowStick from "../../assets/img/yellowStick.png";
import section01 from "../../assets/img/section01.png";
import section02 from "../../assets/img/section02.png";
import section03 from "../../assets/img/section03.png";
import section04 from "../../assets/img/section04.png";
import section051 from "../../assets/img/section05-1.png";
import section052 from "../../assets/img/section05-2.png";
import section053 from "../../assets/img/section05-3.png";
import section06 from "../../assets/img/section06.png";
import section07 from "../../assets/img/section07.png";
import section08 from "../../assets/img/section08.png";
import styles from "./Main.module.css";
import { img } from "../../swiper";
import Button from "../../components/Button/Button";
import ContactBar from "../../components/ContactBar/ContactBar";

export default function Main() {
  // const downloadFileURL = (url) => {
  //   const fileName = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };
  return (
    <main className={styles.container}>
      <ContactBar />
      <div className={styles.mainBg}>
        <img src={mainBg} alt="main" />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionImg}>
          <img src={section01} alt="section01" />
        </div>
        <div className={styles.sectionTextBox}>
          <div className={styles.text01}>
            <h2>Doggienuts</h2>
            <div>
              <span>H</span>uman-grade fresh meat and organs
            </div>
            <div>
              <span>P</span>roprietary vitamin and mineral additions
            </div>
            <div>
              <span>S</span>emi-moist formulation with high moisture content
            </div>
            <div>
              <span>C</span>omplete nutritional balance with over 40 essential
              nutrients
            </div>
            <div>
              <span>C</span>ooked at temperatures below 80 degrees to minimize
              nutrient loss
            </div>
            <div>
              <span>A</span>natural diet that can be fed as a staple food
            </div>
            <div className={styles.yellow}>
              <img src={yellow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionImg}>
          <img src={section02} alt="section02" />
        </div>
        <div className={styles.sectionTextBox}>
          <div className={styles.text02}>
            <h2>
              <span>D</span>OGGIENUTS
            </h2>
            <div>
              Doggienut is an all-natural pet food brand that offers one of the
              most diverse sources of single proteins in korea. We make our
              porducts with a whopping 14 different single proteins.{" "}
            </div>
            <div>
              Chicken, duck, beef, salmon, kangaroo, turkey, deer, and rabbit,
              white fish, horse, black goat, pig, sheep, and tuna.
            </div>
            <div className={styles.yellow}>
              <img src={yellow} alt="yellow" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section03}>
        <div className={styles.sectionImg}>
          <img src={section03} alt="section03" />
        </div>
        <div className={styles.sectionTextBox03}>
          <div className={styles.text03}>
            <h2>
              <span className={styles.span}>D</span>oggienuts Chips
            </h2>
            <div>
              <span>C</span>omplete nutritional balance with 40+ essential
              nutrients
            </div>
            <div>
              <span>D</span>ry formulation with a chewy, firm texture
            </div>
            <div>
              <span>C</span>ooked at Temperatures below 80 degrees to minimize
              nutrient loss
            </div>
            <div>
              <span>W</span>hole food for stock feeding
            </div>
            <div className={styles.yellowFlip}>
              <img src={yellowFlip} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section04}>
        <div className={styles.sectionImg}>
          <img src={section04} alt="section04" />
        </div>
        <div className={styles.sectionTextBox}>
          <div className={styles.text04}>
            <h2>
              <span>Buggienut</span> is a natural diet made with superfood white
              house crickets
            </h2>
            <div className={styles.gray}>100% Human Grade Cricket</div>
            <br />
            <div>3x more protein than chicken and beef</div>
            <div>4x more iron than broccoli and spinach</div>
            <div>More calcium than milk</div>
            <div>More Omega-3s than salmon</div>
            <div>
              Excellent source of vitamins, minerals, omega-3 and 6 fatty acids
            </div>
            <div>Complete protein with all nine essential amino acids</div>
            <div className={styles.yellowFlip}>
              <img src={yellowFlip} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section05}>
        <div className={styles.title05}>
          <span>D</span>ogginuts <span>S</span>tew
        </div>

        <div className={styles.sectionTextBox}>
          <div className={styles.text05}>
            <div className={styles.trippa}>
              <img src={section051} alt="section05-1" />
              <div>The Roman diet of nourishment</div>
              <span>Trippa</span>
            </div>
            <div className={styles.ratatouille}>
              <img src={section052} alt="section05-2" />
              <div>The Roman diet of nourishment</div>
              <span>Ratatouille</span>
            </div>
            <div className={styles.bouillabaisse}>
              <img src={section053} alt="section05-3" />
              <div>The Roman diet of nourishment</div>
              <span>Bouillabaisse</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section06}>
        <div className={styles.sectionImg}>
          <img src={section06} alt="section06" />
        </div>
        <div className={styles.sectionTextBox}>
          <div className={styles.text06}>
            <h2>
              <span>S</span>tew
            </h2>
            <div>it’s not churu!</div>
            <div>it’s a delicious dish!</div>
            <p>Booster Stew as a sprinkle on top of kibble or raw food</p>
            <p>Convenient meals you can feed anytime, anywhere</p>
            <p>
              Delicious dishes with less excess nutrients and more health
              benefits!
            </p>
            <p>
              A nutritious treat that can be fed as a topping or a special treat
            </p>
            <div className={styles.yellowFlip}>
              <img src={yellowFlip} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section03}>
        <div className={styles.sectionImg}>
          <img src={section07} alt="section03" />
        </div>
        <div className={styles.sectionTextBox07}>
          <div className={styles.text07}>
            <h2>
              <span>D</span>HN
            </h2>
            <div>
              It will be presented with Dr. Kazuyoshi Tokumoto, a veterinarian
              specializing in nutrition
            </div>
            <div>
              Dogginuts Health & Nutrition’s Nutrition Supplement Specialized
              Brand
            </div>
            <br />
            <div>The difference in the raw materials</div>
            <div>the difference in effectiveness</div>
            <div>Meet the highest-spec nutritional supplements</div>
          </div>
          {/* <Button
            onClick={() => downloadFileURL(PDF_FILE_URL)}
            title="產品說明書 下載"
          /> */}
        </div>
      </div>

      <div className={styles.section04}>
        <div className={styles.sectionImg}>
          <img src={section08} alt="section08" />
        </div>
        <div className={styles.sectionTextBox}>
          <div className={styles.text08}>
            <div>
              <span>Doggienuts Stew</span> was awarded 1st place for “New
              Product of the Year” at the K-PET FAIR, the largest pet fair in
              Korea.
            </div>
            <div>
              this was a significant achievement based on consumer votes.
            </div>
            <div className={styles.yellowFlip}>
              <img src={yellowFlip} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section09}>
        <div className={styles.text09}>
          <div>Doggienuts have grown into a consumer favorite</div>
          <div>
            It’s a traveling staple a must-have gift for your pet’s birthday or
            Christmas
          </div>
          <div>and a comfort food for sick dogs.</div>
        </div>
        <div className={styles.yellowStick}>
          <img src={yellowStick} alt="yellowStick" />
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        className="mySwiper"
        freeMode={true}
        resistance={true}
        resistanceRatio={0.85}
      >
        {img.map((img) => (
          <SwiperSlide className="swiper-slide" key={img.id}>
            <img src={img.src} alt={img.id} width={"100%"} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/*
      <div className={styles.section}>
        <img src={section07} alt="section07" />
        <div className={styles.sectionText07}>
          <h2>
            <span>D</span>HN
          </h2>
          <div>It will be presented with Dr. Kazuyoshi Tokumoto, a </div>
          <div>veterinarian specializing in nutrition</div>
          <div>Dogginuts Health & Nutrition’s Nutrition Supplement </div>
          <div>Specialized Brand</div>
          <br />
          <div>The difference in the raw materials the difference in </div>
          <div>effectiveness </div>
          <div>Meet the highest-spec nutritional supplements</div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section08} alt="section08" />
        <div className={styles.sectionText08}>
          <div>
            <span>Doggienuts Stew</span> was awarded 1st place for{" "}
          </div>
          <div>“New Product of the Year” at the K-PET FAIR,</div>
          <div>the largest pet fair in Korea.</div>
          <div>this was a significant achievement based solely</div>
          <div>consumer votes.</div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section09} alt="section09" />
        <div className={styles.sectionText09}>
          <div>Doggienuts have grown into a consumer favorite</div>
          <div>
            It’s a traveling staple a must-have gift for your pet’s birthday or
            Christmas
          </div>
          <div>and a comfort food for sick dogs.</div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section10} alt="section10" />
        <div className={styles.sectionText10}>
          <div>
            Our products are loved by kibble-free pets and pets with picky
            eaters.
          </div>
          <div>
            It’s also known for being a greate food for elderly and sick dogs.
          </div>
          <div>
            So it’s been going viral in the dog community and on social media.
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section11} alt="section11" />
        <div className={styles.sectionText11}>
          <div>
            Consumers recreate Doggienut’s brand image on social edia by
            themseleves.
          </div>
          <div>
            As a result of these times, doggienut has become a game and a
            culture.
          </div>
        </div> */}
    </main>
  );
}
