import React from "react";
import styles from "./Section01.module.css";
import section01 from "../../assets/img/section01.png";
export default function Section01() {
  return (
    <section className={styles.section}>
      <div className={styles.section01}>
        <img src={section01} alt="" />
        <h2>Doggienuts</h2>
        <p>
          <span>H</span>uman-grade fresh meat and organs
        </p>
      </div>
    </section>
  );
}
