import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './gambleHeader.module.css';
import { FaGamepad, FaDiceSix } from 'react-icons/fa';
import { GiSnail, GiCartwheel, GiBroadsword } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
import HoverBtn from '../hoverBtn/hoverBtn';
import { useUserDataContext } from '../../context/UserDataContext';
import { useAuthContext } from '../../context/AuthContext';
import DesignWrapper from '../designWrapper/designWrapper';
export default function GambleHeader() {
  const { money, removeUserData } = useUserDataContext();
  const { logout } = useAuthContext();
  const [selectedBtn, setSelectedBtn] = useState('');
  let location = useLocation();
  const checkSelectedBtn = () => {
    const pathArr = location.pathname.split('/');
    setSelectedBtn(pathArr[2]);
  };
  useEffect(() => {
    checkSelectedBtn();
  }, [location]);
  const handleClick = () => {
    logout();
  };
  const handleRemove = () => {
    removeUserData();
    logout();
  };
  const selectedStyle = (name) => {
    return name === selectedBtn && styles.selected;
  };
  return (
    <DesignWrapper isTwo={false}>
      <header className={styles.header}>
        <Link to={'/'} className={styles.title}>
          <FaGamepad className={styles.icon} />
          <span className={styles.titleText}>Gamble</span>
        </Link>
        <nav className={styles.nav}>
          <HoverBtn text={'Gambles'} handleClick={() => {}}>
            <Link
              to='snail'
              className={`${styles.gamble} ${selectedStyle('snail')}`}
            >
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
            <Link
              to='graph'
              className={`${styles.gamble} ${selectedStyle('graph')}`}
            >
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
          </HoverBtn>
          <HoverBtn text={'Ranking'} handleClick={() => {}}>
            <li className={styles.btn}>재산 랭킹</li>
            <li className={styles.btn}>달팽이 랭킹</li>
          </HoverBtn>
          <HoverBtn text={'Money'} handleClick={() => {}}>
            <li className={styles.inform}>재산: {money}</li>
            <li className={styles.btn}>재산 내역</li>
          </HoverBtn>
          <HoverBtn text={'User'} handleClick={() => {}}>
            <li className={styles.btn} onClick={handleClick}>
              로그아웃
            </li>
            <li
              className={`${styles.btn} ${styles.red}`}
              onClick={handleRemove}
            >
              탈퇴하기
            </li>
          </HoverBtn>
        </nav>
      </header>
    </DesignWrapper>
  );
}
