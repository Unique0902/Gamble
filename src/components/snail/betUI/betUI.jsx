import React from "react";
import styles from "./betUI.module.css";

export default function BetUI({ handleBet, inputAmount, handleInput, handleKeyDown, isAvailable, setInputAmount, handleCancel }) {
  const moneyList = [100, 1000, 5000, 10000, 50000, 100000];
  const handleClick = (e, money) => {
    if (inputAmount === undefined) setInputAmount(0);
    setInputAmount((prev) => prev + money);
  };
  return (
    <div className={styles.container}>
      {moneyList.map((money) => (
        <button className={styles.money_button} key={money} onClick={(e) => handleClick(e, money)}>{`+${money}`}</button>
      ))}
      <input
        type="number"
        placeholder="배팅금액을 입력하세요"
        value={inputAmount || ""}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        className={isAvailable ? styles.input : styles.input_unavailable}
      ></input>
      <div className={styles.button_wrapper}>
        <button className={styles.bet_button} onClick={handleBet}>
          배팅
        </button>
        <button className={styles.cancel_button} onClick={handleCancel}>
          취소
        </button>
      </div>
    </div>
  );
}
