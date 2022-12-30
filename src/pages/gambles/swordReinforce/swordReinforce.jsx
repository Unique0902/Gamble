import React from 'react';
import { useState } from 'react';
import styles from './swordReinforce.module.css';
export default function SwordReinforce() {
  const [sword, setSword] = useState({ level: 1, isDestroyed: false });
  const reinforceSword = (sword) => {
    if (!sword.isDestroyed) {
      if (Math.random() * 100 < 100 - 5 * sword.level) {
        console.log('붙음');
        return { ...sword, level: sword.level + 1 };
      } else {
        console.log('터짐');
        console.log({ ...sword, isDestroyed: true });
        return { ...sword, isDestroyed: true };
      }
    } else {
      return sword;
    }
  };
  const handelClick = () => {
    setSword(reinforceSword(sword));
  };
  const handleRetry = () => {
    setSword({ level: 1, isDestroyed: false });
  };
  const handleSell = () => {
    setSword({ level: 1, isDestroyed: false });
  };
  return (
    <section className={styles.wrapper}>
      <section className={styles.inform}>
        <span className={styles.text}>{`현재: ${sword.level}성`}</span>
        <span className={styles.text}>{`검이름: 지리는검`}</span>
      </section>
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
              <span className={styles.text}>{`강화비용: 10000원`}</span>
              <span className={styles.text}>{`판매비용: 7000원`}</span>
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
    </section>
  );
}
