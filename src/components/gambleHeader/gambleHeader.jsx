import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './gambleHeader.module.css';
import { FaGamepad, FaDiceSix } from 'react-icons/fa';
import { GiSnail, GiCartwheel, GiBroadsword } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
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
  if (!selectedBtn) {
    return <></>;
  }
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.title}>
        <FaGamepad className={styles.icon} />
        <span className={styles.titleText}>Gamble</span>
      </Link>
      <Link to='snail' className={`${styles.gamble} ${selectedStyle('snail')}`}>
        <GiSnail />
        달팽이
      </Link>
      <Link
        to='sniffling'
        className={`${styles.gamble} ${selectedStyle('sniffling')}`}
      >
        <FaDiceSix />
        홀짝
      </Link>
      <Link to='graph' className={`${styles.gamble} ${selectedStyle('graph')}`}>
        <BsGraphUp />
        그래프
      </Link>
      <Link
        to='roulette'
        className={`${styles.gamble} ${selectedStyle('roulette')}`}
      >
        <GiCartwheel />
        룰렛
      </Link>
      <Link
        to='swordReinforce'
        className={`${styles.gamble} ${selectedStyle('swordReinforce')}`}
      >
        <GiBroadsword />
        검강화
      </Link>
    </header>
  );
}
