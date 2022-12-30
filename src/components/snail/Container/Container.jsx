import React from "react";
import WinnerProvider from "../../../context/snail/WinnerContext";
import SnailRow from "../SnailRow/SnailRow";
import styles from "./Container.module.css";
import WinnerText from "../WinnerText/WinnerText";

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
