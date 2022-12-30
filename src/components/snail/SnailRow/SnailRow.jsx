import React, { useContext } from "react";
import SnailImg from "../SnailImg/SnailImg";
import styles from "./SnailRow.module.css";
import { useState, useRef, useEffect } from "react";
import { WinnerContext } from "../../../context/snail/WinnerContext";

export default function SnailRow({ index }) {
  const [snailX, setSnailX] = useState(0);
  const [snailLenToggle, seetSnailLenToggle] = useState(true);
  const snailXRef = useRef(0);
  const { setWinner } = useContext(WinnerContext);

  const maxDistance = 600;

  const returnRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const min = 1;
  const max = 100;
  useEffect(() => {
    const timer = setInterval(() => {
      const randomDistance = returnRandom(min, max);
      snailXRef.current = snailXRef.current + randomDistance;
      setSnailX(snailXRef.current);
      seetSnailLenToggle((prev) => !prev);
      if (snailXRef.current >= maxDistance) {
        clearInterval(timer);
        setSnailX(maxDistance);
        seetSnailLenToggle(true);
        setWinner((prev) => [...prev, index]);
        return;
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={styles.race}>
      <SnailImg x={snailX} len={snailLenToggle}></SnailImg>
    </div>
  );
}
