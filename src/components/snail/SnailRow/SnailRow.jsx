import React, { useContext } from "react";
import SnailImg from "../snailImg/snailImg";
import styles from "./snailRow.module.css";
import { useState, useRef, useEffect } from "react";
import { WinnerContext } from "../../../context/snail/winnerContext";

export default function SnailRow({ index }) {
  const [snailX, setSnailX] = useState(0);
  const [snailLenToggle, seetSnailLenToggle] = useState(true);
  const snailXRef = useRef(0);
  const { setWinner } = useContext(WinnerContext);

  const myAudio = new Audio(); // Aduio 객체 생성

  myAudio.src = "public/audio/snail/코트.mp3"; // 음원 파일 설정
  myAudio.play().catch((e) => {
    console.log(e);
  });

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
  }, [index, setWinner]);
  return (
    <div className={styles.race}>
      <SnailImg x={snailX} len={snailLenToggle}></SnailImg>
    </div>
  );
}
