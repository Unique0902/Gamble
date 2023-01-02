import React from "react";

import SnailRow from "../snailRow/snailRow";
import styles from "./container.module.css";
import WinnerText from "../winnerText/winnerText";
import { useState, useContext } from "react";
import { WinnerContext } from "../../../context/snail/WinnerContext";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useEffect } from "react";

export default function Container() {
  const raceNum = 3;
  const [userChoice, setUserChoice] = useState(-1);
  const [isStart, setIsStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isBet, setIsBet] = useState(false);
  const [inputAmount, setInputAmount] = useState();
  const [betAmount, setBetAmount] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const [isUserWin, setIsUserWin] = useState(false);
  const { winner, setWinner } = useContext(WinnerContext);
  const { updateMoney, money } = useUserDataContext();

  const handleStart = () => {
    setIsStart(true);
  };
  const handleInit = () => {
    if (isFinish) {
      setIsFinish(false);
      setIsStart(false);
      setUserChoice(-1);
      setBetAmount(0);
      setWinner([]);
    }
  };
  const handleBet = () => {
    if (userChoice === -1) {
      alert("달팽이를 클릭하여 달팽이를 선택하세요.");
    } else {
      setIsBet(true);
      setBetAmount(inputAmount);
      updateMoney(money - inputAmount);
    }
  };

  const handleInput = (e) => {
    if (e.target.value.length > 0) {
      let input = parseInt(e.target.value);
      setInputAmount(input);
      if (input > money) {
        setIsAvailable(false);
      } else {
        setIsAvailable(true);
      }
    }
  };

  useEffect(() => {
    if (winner.length === raceNum) {
      setIsFinish(true);
      if (isBet) {
        if (userChoice == winner[0]) {
          setIsUserWin(true);
          updateMoney(money + betAmount * 2.98);
        } else setIsUserWin(false);
      }
    }
  }, [winner]);

  return (
    <div className={styles.container}>
      <button onClick={handleStart}>시작하기</button>
      <button onClick={handleInit}>초기화</button>
      {[...Array(raceNum).keys()].map((item) => (
        <SnailRow key={item} index={item} choice={setUserChoice} isStart={isStart}></SnailRow>
      ))}
      {winner.length === 0 ? <p>우승자는?</p> : <WinnerText></WinnerText>}
      <p>{userChoice === -1 ? "달팽이를 골라보세요!" : `${userChoice + 1}번 달팽이 선택`}</p>
      <input type="number" placeholder="배팅금액을 입력하세요" value={inputAmount} onChange={handleInput} className={isAvailable ? "" : styles.input}></input>
      <button onClick={handleBet}>배팅하기</button>
      <p>{isBet ? `${betAmount}원 배팅하셨습니다.` : "인생을 배팅하세요"}</p>
      {isBet && isFinish ? <p>{isUserWin ? `적중! +${betAmount * 2.98}원!` : "아쉽지만 다음 기회에"}</p> : ""}
    </div>
  );
}
