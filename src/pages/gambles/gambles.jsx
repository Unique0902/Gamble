import React from 'react';
import DesignWrapper from '../../components/designWrapper/designWrapper';
import { useAuthContext } from '../../context/AuthContext';
import styles from './gambles.module.css';
import Game from '../../components/game/game';
import { useUserDataContext } from '../../context/UserDataContext';

export default function Gambles() {
  const { logout } = useAuthContext();
  const { money, removeUserData } = useUserDataContext();
  const handleClick = () => {
    logout();
  };
  const handleRemove = () => {
    removeUserData();
    logout();
  };
  return (
    <DesignWrapper>
      <section className={styles.titleSec}>
        <nav className={styles.nav}>
          <h1 className={styles.title}>Gambles List</h1>
          <h3 className={styles.money}>{`현재금액: ${money}원`}</h3>
          <div className={styles.btnSec}>
            <button className={styles.btn} onClick={handleClick}>
              로그아웃
            </button>
            <button className={styles.btn} onClick={handleRemove}>
              탈퇴하기
            </button>
          </div>
        </nav>
        <ul className={styles.games}>
          <Game img={'snail'} text={'달팽이 게임'} />
          <Game img={'sniffling'} text={'홀짝'} />
          <Game img={'graph'} text={'그래프 게임'} />
          <Game img={'roulette'} text={'룰렛 게임'} />
          <Game img={'swordReinforce'} text={'검 강화 게임'} />
        </ul>
      </section>
    </DesignWrapper>
  );
}
