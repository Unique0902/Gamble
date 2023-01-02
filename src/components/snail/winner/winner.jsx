import React from "react";
import { useWinnerContext } from "../../../context/snail/WinnerContext";
import styles from "./winner.module.css";

export default function Winner() {
  const { winner } = useWinnerContext();
  const race = 3;
  const newWinnerList = new Array(race).fill(3);
  for (let i = 0; i < winner.length; i++) {
    newWinnerList[i] = winner[i];
  }

  return (
    <div className={styles.winner_frame}>
      {newWinnerList.map((item, index) => (
        <div className={styles.frame} key={index}>
          <label>{`${index + 1}등`}</label>
          <img className={styles.icon} src={`/images/snail/snail-icon${item}.png`} alt={item}></img>
        </div>
      ))}
    </div>
  );
}
