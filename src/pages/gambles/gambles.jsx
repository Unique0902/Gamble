import React from 'react';
import DesignWrapper from '../../components/designWrapper/designWrapper';
import styles from './gambles.module.css';
import Game from '../../components/game/game';

export default function Gambles() {
  return (
    <DesignWrapper isTwo={false}>
      <section className={styles.titleSec}>
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
