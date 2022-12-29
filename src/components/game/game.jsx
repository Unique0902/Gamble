import React from 'react';
import styles from './game.module.css';
import { Link } from 'react-router-dom';

export default function Game({ img, text }) {
  return (
    <Link to={`${img}`} className={styles.game}>
      <img src={`/images/${img}.png`} alt='' className={styles.img} />
      <h3 className={styles.name}>{text}</h3>
    </Link>
  );
}
