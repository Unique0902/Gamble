import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exchanger from '../../../components/exchanger/exchanger';
import {
  reinforceSword,
  BASIC_SWORD,
} from '../../../data/swordReinforce/logic';
import {
  swordReinforcePriceArr,
  swordSellPriceArr,
} from '../../../data/swordReinforce/price';
import styles from './swordReinforce.module.css';

export default function SwordReinforce() {
  const [sword, setSword] = useState();
  const [money, setMoney] = useState();
  useEffect(() => {
    if (localStorage.getItem('swordGameMoney')) {
      setMoney(parseInt(localStorage.getItem('swordGameMoney')));
    } else {
      localStorage.setItem('swordGameMoney', 50000);
      setMoney(50000);
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem('swordInform')) {
      setSword(JSON.parse(localStorage.getItem('swordInform')));
    } else {
      localStorage.setItem('swordInform', JSON.stringify({ ...BASIC_SWORD }));
      setSword({ ...BASIC_SWORD });
    }
  }, []);
  const updateMoney = (money) => {
    setMoney(money);
    localStorage.setItem('swordGameMoney', money);
  };
  const updateSword = (sword) => {
    setSword(sword);
    localStorage.setItem('swordInform', JSON.stringify(sword));
  };
  const handelClick = () => {
    if (money >= swordReinforcePriceArr[sword.level - 1]) {
      updateMoney(money - swordReinforcePriceArr[sword.level - 1]);
      updateSword(reinforceSword(sword));
    }
  };
  const handleRetry = () => {
    updateSword({ ...BASIC_SWORD });
  };
  const handleSell = () => {
    if (!sword.isDestroyed && sword.level != 0) {
      console.log(parseInt(money));
      console.log(swordSellPriceArr[sword.level - 1]);
      updateMoney(money + swordSellPriceArr[sword.level - 1]);
      handleRetry();
    }
  };
  return (
    <section className={styles.wrapper}>
      <Exchanger money={money} gamePer={5} updateGameMoney={updateMoney} />
      <section className={styles.inform}>
        <span className={styles.text}>{`현재: ${
          sword ? sword.level : ''
        }성 `}</span>
        <span className={styles.text}>{`검이름: 지리는검 `}</span>
        <span className={styles.text}>{`소지금액: ${money}원`}</span>
      </section>
      {sword && (
        <section className={styles.main}>
          {sword.isDestroyed ? (
            <div className={styles.destroyed}>
              <span className={styles.destroyedText}>파괴됨</span>
            </div>
          ) : (
            <img
              src='/images/swordReinforce.png'
              alt='sword'
              className={styles.img}
            />
          )}
          <div className={styles.description}>
            {sword.isDestroyed ? (
              <>
                <button className={styles.btn} onClick={handleRetry}>
                  새로시작
                </button>
              </>
            ) : (
              <>
                <span className={styles.text}>{`강화비용: ${
                  swordReinforcePriceArr[sword.level - 1]
                }원`}</span>
                <span className={styles.text}>{`판매비용: ${
                  swordSellPriceArr[sword.level - 1]
                }원`}</span>
                <span className={styles.text}>{`강화확률: ${
                  100 - 5 * sword.level
                }%`}</span>
                <button className={styles.btn} onClick={handelClick}>
                  강화하기
                </button>
                <button className={styles.btn} onClick={handleSell}>
                  판매하기
                </button>
              </>
            )}
          </div>
        </section>
      )}
    </section>
  );
}
