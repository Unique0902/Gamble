import React from 'react';
import { useState } from 'react';
import ExchangerMenu from './exchangerMenu/exchangerMenu';
import styles from './exchanger.module.css';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Exchanger({ money, updateGameMoney, gamePer }) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => {
          setIsShowMenu(true);
        }}
        className={styles.btn}
      >
        <GiReceiveMoney />
        환전하기
      </button>
      {isShowMenu && (
        <ExchangerMenu
          setIsShowMenu={setIsShowMenu}
          gameMoney={money}
          updateGameMoney={updateGameMoney}
          gamePer={gamePer}
        />
      )}
    </div>
  );
}
