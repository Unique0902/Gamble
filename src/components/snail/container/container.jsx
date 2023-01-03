import React from "react";

import SnailRow from "../snailRow/snailRow";
import styles from "./container.module.css";
import { useState } from "react";
import { useWinnerContext } from "../../../context/snail/WinnerContext";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useEffect, useRef } from "react";
import SelectInfo from "../selectInfo/selectInfo";
import BetUI from "../betUI/betUI";

export default function Container() {
  const raceNum = 3;
  const count = 10;
  const [userChoice, setUserChoice] = useState(3);
  const [isBefore, setIsBefore] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isBet, setIsBet] = useState(false);
  const [inputAmount, setInputAmount] = useState();
  const [betAmount, setBetAmount] = useState(0);
  const winAmountRef = useRef(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const [isUserWin, setIsUserWin] = useState(false);
  const [startCount, setStartCount] = useState(count);

  const startCountRef = useRef(count);
  const { winner, setWinner } = useWinnerContext();
  const { updateMoney, money } = useUserDataContext();

  const handleStart = () => {
    setIsBefore(false);
    setIsStart(true);
    setIsFinish(false);
    if (isBet) {
      // 시작했을 때, 배팅한 상태면 돈 감소
      updateMoney(money - inputAmount);
    }
  };
  const handleInit = () => {
    if (isFinish) {
      setIsBefore(true);
      setIsStart(false);
      setIsFinish(false);
      setUserChoice(3);
      setIsBet(false);
      setBetAmount(0);
      setWinner([]);
    }
  };
  const handleBet = () => {
    if (isBefore && isAvailable) {
      if (userChoice === 3) {
        alert("달팽이를 클릭하여 달팽이를 선택하세요.");
      } else {
        setIsBet(true);
        setBetAmount(inputAmount);
      }
    }
  };

  const handleCancel = () => {
    setIsBet(false);
    setBetAmount(undefined);
    setUserChoice(3);
  };

  const handleInput = (e) => {
    if (e.target.value.length > 0) {
      let input = parseInt(e.target.value);
      setInputAmount(input);
    } else {
      setInputAmount(0);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleBet();
    }
  };

  useEffect(() => {
    if (winner.length === raceNum) {
      setIsBefore(true);
      setIsFinish(true);
      if (isBet) {
        if (userChoice === winner[0]) {
          setIsUserWin(true);
          winAmountRef.current = Math.ceil(betAmount * 2.98);
          updateMoney(money + winAmountRef.current);
        } else setIsUserWin(false);
      }
    }
  }, [winner]);

  useEffect(() => {
    let timer;
    if (isBefore || isFinish) {
      timer = setInterval(() => {
        startCountRef.current = startCountRef.current - 1;
        setStartCount(startCountRef.current);
        if (startCountRef.current === count - 2) {
          handleInit();
        }
        if (startCountRef.current < 1) {
          startCountRef.current = count;
          clearInterval(timer);
          handleStart();
          return;
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isFinish]);

  useEffect(() => {
    if (inputAmount > money) {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
    }
  }, [inputAmount]);

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        {isFinish || isBefore ? (
          <>
            <label className={styles.count_num}>{`${startCountRef.current}`}</label>
            <label className={styles.text}>초 후 게임 시작</label>
          </>
        ) : (
          <p className={styles.count_num}>Game Start!</p>
        )}
      </div>

      {[...Array(raceNum).keys()].map((item) => (
        <SnailRow key={item} index={item} choice={setUserChoice} isStart={isStart}></SnailRow>
      ))}

      <SelectInfo userChoice={userChoice}></SelectInfo>

      <p>{isBet ? `${betAmount}원 배팅하셨습니다.` : "인생을 배팅하세요"}</p>
      {isBet && isFinish ? <p>{isUserWin ? `적중! +${winAmountRef.current}원!` : "아쉽지만 다음 기회에"}</p> : ""}
      <BetUI
        handleBet={handleBet}
        handleInput={handleInput}
        inputAmount={inputAmount}
        onKeyDown={handleKeyDown}
        isAvailable={isAvailable}
        setInputAmount={setInputAmount}
        handleCancel={handleCancel}
      ></BetUI>
    </div>
  );
}
