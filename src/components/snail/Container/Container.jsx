import React from 'react';

import SnailRow from '../SnailRow/SnailRow';
import styles from './Container.module.css';
import WinnerText from '../WinnerText/WinnerText';
import { useState, useContext } from 'react';
import { WinnerContext } from '../../../context/snail/WinnerContext';

export default function Container() {
  const raceNum = 3;
  const [userChoice, setUserChoice] = useState(undefined);
  const [isStart, setIsStart] = useState(false);
  const [init, setInit] = useState(false);
  const [snailX, setSnailX] = useState(0);
  const { winner, setWinner } = useContext(WinnerContext);
  const handleStart = () => {
    setIsStart(true);
  };
  const handleInit = () => {
    setWinner([]);
    setSnailX(0);
  };
  return (
    <div className={styles.container}>
      <button onClick={handleStart}>시작하기</button>
      <button onClick={handleInit}>초기화</button>
      {[...Array(raceNum).keys()].map((item) => (
        <SnailRow
          key={item}
          index={item}
          choice={setUserChoice}
          x={snailX}
        ></SnailRow>
      ))}
      {winner.length === 0 ? <p>우승자는?</p> : <WinnerText></WinnerText>}
      <p>
        {userChoice === undefined
          ? '달팽이를 골라보세요!'
          : `${userChoice + 1}번 달팽이 선택`}
      </p>
    </div>
  );
}
