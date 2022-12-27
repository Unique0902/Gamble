import React from 'react';
import styles from './game.module.css';

export default function Game({ img, text }) {
  return (
    <li className={styles.game}>
      <img src={`/images/${img}.png`} alt='' className={styles.img} />
      <h3 className={styles.name}>{text}</h3>
    </li>
  );
}
