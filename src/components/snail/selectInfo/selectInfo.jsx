import React from "react";
import Winner from "../winner/winner";
import styles from "./selectInfo.module.css";

export default function SelectInfo({ userChoice }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <label>유저 선택</label>
        <img className={styles.icon} src={`/images/snail/snail-icon${userChoice}.png`} alt="유저 선택"></img>
      </div>
      <Winner></Winner>
    </div>
  );
}
