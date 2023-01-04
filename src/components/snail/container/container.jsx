import React from "react";

import SnailRow from "../snailRow/snailRow";
import styles from "./container.module.css";
import { useState } from "react";
import { useWinnerContext } from "../../../context/snail/WinnerContext";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useEffect, useRef } from "react";
import SelectInfo from "../selectInfo/selectInfo";
import BetUI from "../betUI/betUI";
import useInterval from "../../../hooks/useInterval";

export default function Container() {
  const raceNum = 3;
  const count = 10;
  const [userChoice, setUserChoice] = useState(3);
  const [isBefore, setIsBefore] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isBet, setIsBet] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);
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
      // 시작했을 때 배팅한 상태면 돈 감소

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
        setIsBet(false);
        setIsBet(true);
        setBetAmount(inputAmount);
      }
    }
  };

  const handleCancel = () => {
    setIsBet(false);
    setBetAmount(0);
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

  useInterval(() => {
    if (isBefore || isFinish) {
      startCountRef.current = startCountRef.current - 1;
      setStartCount(startCountRef.current);
      if (startCountRef.current === count - 2) {
        handleInit();
      }
      if (startCountRef.current < 1) {
        startCountRef.current = count;
        handleStart();
        return;
      }
    }
  }, 1000);

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

      <BetUI
        handleBet={handleBet}
        handleInput={handleInput}
        inputAmount={inputAmount}
        onKeyDown={handleKeyDown}
        isAvailable={isAvailable}
        setInputAmount={setInputAmount}
        handleCancel={handleCancel}
        isBet={isBet}
        betAmount={betAmount}
        isFinish={isFinish}
        isUserWin={isUserWin}
        winAmountRef={winAmountRef}
      ></BetUI>
    </div>
  );
}
