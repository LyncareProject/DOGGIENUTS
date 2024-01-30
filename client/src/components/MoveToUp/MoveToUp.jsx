import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moveToUp from "../../assets/img/MoveToUp.png";
import styles from "./MoveToUp.module.css";

export default function MoveToUp() {
  const [toggleBtn, setToggleBtn] = useState(false);

  // window 객체에서 scrollY 값을 받아옴
  // 어느정도 스크롤이 된건지 판단 후, 토글 여부 결정
  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > 4 ? setToggleBtn(true) : setToggleBtn(false);
  };

  // scroll 이벤트 발생 시 이를 감지하고 handleScroll 함수를 실행
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const MoveToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.moveToUpWrap}>
      <img
        style={
          toggleBtn
            ? { opacity: "1", transition: "all .3s ease-in-out" }
            : { opacity: "0", transition: "all .3s ease-in-out" }
        }
        className={styles.moveToUp}
        src={moveToUp}
        alt="MoveToUp"
        onClick={MoveToUp}
      />
    </div>
  );
}
