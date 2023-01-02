import React, { useContext } from "react";
import SnailImg from "../snailImg/snailImg";
import styles from "./snailRow.module.css";
import { useState, useRef, useEffect } from "react";
import { WinnerContext } from "../../../context/snail/WinnerContext";
import c1 from "../../../assets/audio/snail/c1.mp3";
import c2 from "../../../assets/audio/snail/c2.mp3";
import c3 from "../../../assets/audio/snail/c3.mp3";

export default function SnailRow({ index, choice, isStart, isFinish }) {
  const [snailX, setSnailX] = useState(0);
  const [snailLenToggle, setSnailLenToggle] = useState(true);
  const snailXRef = useRef(0);
  const { setWinner } = useContext(WinnerContext);

  const audios = [new Audio(c1), new Audio(c2), new Audio(c3)]; // Aduio 객체 생성

  const maxDistance = 600;

  const returnRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const min = 1;
  const max = 100;

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        const randomDistance = returnRandom(min, max);
        snailXRef.current = snailXRef.current + randomDistance;
        setSnailX(snailXRef.current);
        setSnailLenToggle((prev) => !prev);
        if (snailXRef.current >= maxDistance) {
          const audioNum = Math.floor(Math.random() * audios.length);
          clearInterval(timer);
          setSnailX(maxDistance);
          setSnailLenToggle(true);
          setWinner((prev) => [...prev, index]);
          return;
        }
      }, 500);
    } else {
      setSnailX(0);
      snailXRef.current = 0;
    }

    return () => {
      clearInterval(timer);
    };
  }, [index, setWinner, isStart]);

  //if (!isStart) setSnailX(0);

  return (
    <div className={styles.race}>
      <SnailImg x={snailX} len={snailLenToggle} choice={choice} index={index} isStart={isStart}></SnailImg>
    </div>
  );
}
