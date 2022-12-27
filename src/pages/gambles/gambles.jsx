import React from 'react';
import DesignWrapper from '../../components/designWrapper/designWrapper';
import { useAuthContext } from '../../context/AuthContext';
import styles from './gambles.module.css';
import snailImg from '../../imgs/snail.png';
import snifflingImg from '../../imgs/sniffling.jpg';
import graphImg from '../../imgs/graph.png';
import rouletteImg from '../../imgs/roulette.jpg';
import Game from '../../components/game/game';
import { useUserDataContext } from '../../context/UserDataContext';

export default function Gambles() {
  const { logout } = useAuthContext();
  const { money } = useUserDataContext();
  const handleClick = () => {
    logout();
  };
  return (
    <DesignWrapper>
      <section className={styles.titleSec}>
        <nav className={styles.nav}>
          <h1 className={styles.title}>Gambles List</h1>
          <h3 className={styles.money}>{`현재금액: ${money}원`}</h3>
          <button className={styles.btn} onClick={handleClick}>
            로그아웃
          </button>
        </nav>
        <ul className={styles.games}>
          <Game img={snailImg} text={'달팽이 게임'} />
          <Game img={snifflingImg} text={'홀짝'} />
          <Game img={graphImg} text={'그래프 게임'} />
          <Game img={rouletteImg} text={'룰렛 게임'} />
        </ul>
      </section>
    </DesignWrapper>
  );
}
