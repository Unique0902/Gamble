import React from "react";
import WinnerProvider from "../../../context/snail/winnerContext";
import SnailRow from "../snailRow/snailRow";
import styles from "./container.module.css";
import WinnerText from "../winnerText/winnerText";

export default function Container() {
  const raceNum = 3;
  return (
    <div className={styles.container}>
      <WinnerProvider>
        {[...Array(raceNum).keys()].map((item) => (
          <SnailRow key={item} index={item}></SnailRow>
        ))}
        <WinnerText></WinnerText>
      </WinnerProvider>
    </div>
  );
}
