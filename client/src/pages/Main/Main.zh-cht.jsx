import React, { useState, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PDF_FILE_URL } from "../../service/fileService";
import "swiper/css";
import "swiper/css/autoplay";
import mainBg from "../../assets/img/CN_main1.jpg";
import yellow from "../../assets/img/yellow.png";
import yellowFlip from "../../assets/img/yellowFlip.png";
import yellowStick from "../../assets/img/yellowStick.png";
import section01 from "../../assets/img/section01.jpg";
import section02 from "../../assets/img/section02.jpg";
import section03 from "../../assets/img/section03.jpg";
import section04 from "../../assets/img/section04.jpg";
import section051 from "../../assets/img/section05-1.jpg";
import section052 from "../../assets/img/section05-2.jpg";
import section053 from "../../assets/img/section05-3.jpg";
import section06 from "../../assets/img/section06.jpg";
import section07 from "../../assets/img/section07.jpg";
import section08 from "../../assets/img/section08.jpg";
import styles from "./Main.module.css";
import { img } from "../../swiper";
import Button from "../../components/Button/Button";
import ContactBarZhCht from "../../components/ContactBar/ContactBar.zh-cht";

export default function MainZhCht() {
  const downloadFileURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <main className={styles.container}>
      <ContactBarZhCht />
      <div className={styles.mainBg}>
        <img src={mainBg} alt="main" />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionImg}>
          <img src={section01} alt="section01" />
        </div>
        <div className={styles.sectionTextBox}>
          <div className={styles.text01}>
            <h2>
              我們品牌的代表產品是 <span>“跳舞的狗狗甜甜圈”。</span>
            </h2>
            <h2>
              <span>Dancing Doggienuts</span>
            </h2>
            <div>我們使用人類食用級別的新鮮肉類和內臟，</div>
            <div>添加特有的維生素和礦物質，</div>
            <div>含有高水分的半濕配方，</div>
            <div>含有40多種必需營養素，營養全面均衡，</div>
            <div>在低於80攝氏度的溫度下烹煮，最大程度地減少了</div>
            <div>寵物食品的營養損失，</div>
            <div>是可以作為主食的營養食品。</div>
            <div>
              <h2>
                我們的主要產品是：狗狗甜甜圈，狗狗甜甜圈 脆片，狗狗甜甜圈 燉菜
              </h2>
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
              <span>D</span>OGGIENUTS <span>狗</span>狗甜甜圈
            </h2>
            <div>跳舞的甜甜圈是韓國提供最多單一蛋白質的自然食品品牌。 </div>
            <div>
              產品由雞肉、鴨肉、牛肉、三文魚、袋鼠肉、火雞、鹿肉、兔子肉、白肉魚、馬肉、黑山羊肉、豬肉、金槍魚、羊肉等多達14種單一蛋白質製成。
            </div>
            <div className={styles.yellow}>
              <img src={yellow} alt="yellow" />
            </div>
          </div>
        </div>
      </div>

      {/* 도기집 */}
      <div className={styles.section03}>
        <div className={styles.sectionImg}>
          <img src={section03} alt="section03" />
        </div>
        <div className={styles.sectionTextBox03}>
          <div className={`${styles.text03}, ${styles.ZhChttext03}`}>
            <h2>
              <span className={styles.span}>D</span>oggienuts Chips
              <span>狗</span>狗甜甜圈 脆片
            </h2>
            <div>
              富含40多種必需營養元素，營養均衡， 口感鬆脆結實，
              <br />
              有嚼勁，幹製配方， 在低於80攝氏度的溫度下製作，
              <br />
              最大限度減少了狗狗食品的營養損失， 是可作為主食的自然食品。
            </div>
            <div></div>
            <div className={styles.yellowFlip1}>
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
              <span>“蟲肉甜甜圈”</span>使用超級食物-剛脫殼的蟋蟀製成的自然食品
              是100%人類食用級別的蟋蟀
            </h2>
            <div className={styles.gray}>100% Human Grade Cricket</div>
            <br />
            <div>蛋白質含量是雞胸肉和牛肉的3倍，</div>
            <div>鐵含量是西蘭花和菠菜的4倍，</div>
            <div>鈣含量高於牛奶，</div>
            <div>Omega3含量高於三文魚，</div>
            <div>維生素、礦物質、Omega3和6脂肪酸的絕佳來源，</div>
            <div>是含有全部9種必需氨基酸的完備的蛋白質。</div>
            <div className={styles.yellowFlip}>
              <img src={yellowFlip} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section05}>
        <div className={styles.title05}>
          <span>D</span>ogginuts <span>S</span>tew <span>狗</span>狗甜甜圈{" "}
          <span>燉</span>菜
        </div>

        <div className={styles.sectionTextBox}>
          <div className={styles.text05}>
            <div className={styles.trippa}>
              <img src={section051} alt="section05-1" />
              <div>內臟燉菜</div>
              <span>Trippa</span>
            </div>
            <div className={styles.ratatouille}>
              <img src={section052} alt="section05-2" />
              <div>蔬菜燉菜</div>
              <span>Ratatouille</span>
            </div>
            <div className={styles.bouillabaisse}>
              <img src={section053} alt="section05-3" />
              <div>海鮮燉菜</div>
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
          <div className={`${styles.text06} , ${styles.ZhChttext06}`}>
            <h2>
              <span>S</span>tew <span>燉</span>菜
            </h2>
            <p></p>
            <div>這不是Churu!</div>
            <div>這是一道美味佳餚</div>
            <p></p>
            <p>灑在狗狗食品或天然食物上的Booster Stew(美味燉品)，</p>
            <p>是隨時隨地都可餵食的方便餐，</p>
            <p>通過美味燉品減少過度營養，對健康有益！</p>
            <p>是營養豐富的零食，可作為主食配料或輔食餵食。</p>
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
            <div>與營養學獸醫專家 Tokumoto Kazuyoshi博士合作，提出了</div>
            <div>“狗狗甜甜圈-健康營養”的專業營養補充劑品牌。</div>
            <br />
            <div>成分不同意味著</div>
            <div>功效不同</div>
            <div>請使用最高規格的營養補充劑。</div>
          </div>
          <Button
            onClick={() => downloadFileURL(PDF_FILE_URL)}
            title="產品說明書 下載"
            className={styles.PdfButton}
          />
        </div>
      </div>

      <div className={styles.section04}>
        <div className={styles.sectionImg}>
          <img src={section08} alt="section08" />
        </div>
        <div className={styles.sectionTextBox}>
          <div className={`${styles.text08} , ${styles.ZhChttext08}`}>
            <div>
              <span>狗狗甜甜圈 燉菜</span>
            </div>
            <div>在韓國最大的寵物展 K-PET FAIR榮獲“年度新產品”第一名。</div>
            <div>這是一項完全由消費者投票決定的具有重大意義的獎項。</div>
            <div className={styles.yellowFlip}>
              <img src={yellowFlip} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section09}>
        <div className={`${styles.text09} ${styles.ZhChttext09}`}>
          <div>承蒙消費者的喜愛 成長起來的狗狗甜甜圈，</div>
          <div>現在已經是旅遊必備產品， 是寵物生日或者聖誕節必備的禮物，</div>
          <div>也成為安慰患病狗狗的營養品。</div>
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
