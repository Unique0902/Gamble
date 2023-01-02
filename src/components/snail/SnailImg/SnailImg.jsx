import React from 'react';
import styles from './SnailImg.module.css';

export default function SnailImg({ x, len, choice, index }) {
  const handleClick = () => {
    choice(index);
  };
  return (
    <>
      <img
        onClick={handleClick}
        style={{ left: x, width: len ? `100px` : `70px` }}
        className={styles.snail}
        src='/images/snail/snail-icon.png'
        alt='snail'
      ></img>
    </>
  );
}
