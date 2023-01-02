import React from "react";
import WinnerProvider from "../../../context/snail/winnerContext";
import SnailRow from "../snailRow/snailRow";
import styles from "./container.module.css";
import WinnerText from "../winnerText/winnerText";
import { useState } from "react";

export default function Container() {
  const [userSelect, setUserSelect] = useState(undefined);
  const raceNum = 3;

  return (
    <div className={styles.container}>
      <WinnerProvider>
        {[...Array(raceNum).keys()].map((item) => (
          <SnailRow key={item} index={item} setUserSelect={setUserSelect}></SnailRow>
        ))}
        <WinnerText></WinnerText>
      </WinnerProvider>
    </div>
  );
}
