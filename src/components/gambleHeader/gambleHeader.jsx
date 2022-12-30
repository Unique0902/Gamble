import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './gambleHeader.module.css';

export default function GambleHeader() {
  const [selectedBtn, setSelectedBtn] = useState('');
  let location = useLocation();
  const checkSelectedBtn = () => {
    const pathArr = location.pathname.split('/');
    setSelectedBtn(pathArr[2]);
  };
  useEffect(() => {
    checkSelectedBtn();
  }, [location]);
  const selectedStyle = (name) => {
    return name === selectedBtn && styles.selected;
  };
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span className={styles.titleText}>Gamble</span>
      </div>
      <Link to='snail' className={`${styles.gamble} ${selectedStyle('snail')}`}>
        달팽이
      </Link>
      <Link
        to='sniffling'
        className={`${styles.gamble} ${selectedStyle('sniffling')}`}
      >
        홀짝
      </Link>
      <Link to='graph' className={`${styles.gamble} ${selectedStyle('graph')}`}>
        그래프
      </Link>
      <Link
        to='roulette'
        className={`${styles.gamble} ${selectedStyle('roulette')}`}
      >
        룰렛
      </Link>
      <Link
        to='swordReinforce'
        className={`${styles.gamble} ${selectedStyle('swordReinforce')}`}
      >
        검강화
      </Link>
    </header>
  );
}
