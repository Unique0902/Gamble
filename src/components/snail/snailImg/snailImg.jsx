import React from "react";
import styles from "./snailImg.module.css";

export default function SnailImg({ x, len, choice, index, isStart }) {
  const handleClick = () => {
    if (!isStart) {
      choice(index);
    }
  };
  return (
    <>
      <img
        onClick={handleClick}
        style={{ left: x, width: len ? `100px` : `70px` }}
        className={styles.snail}
        src={`/images/snail/snail-img${index}.png`}
        alt="snail"
      ></img>
    </>
  );
}
