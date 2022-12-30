import React from 'react';
import { Link } from 'react-router-dom';
import styles from './gambleHeader.module.css';

export default function GambleHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span className={styles.titleText}>Gamble</span>
      </div>
      <Link to='snail' className={styles.gamble}>
        달팽이
      </Link>
      <Link to='sniffling' className={styles.gamble}>
        홀짝
      </Link>
      <Link to='graph' className={styles.gamble}>
        그래프
      </Link>
      <Link to='roulette' className={styles.gamble}>
        룰렛
      </Link>
      <Link to='swordReinforce' className={styles.gamble}>
        검강화
      </Link>
    </header>
  );
}
