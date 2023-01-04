import React from 'react';
import { useState } from 'react';
import { useUserDataContext } from '../../../context/UserDataContext';
import PopupWrapper from '../../popupWrapper/popupWrapper';
import styles from './exchangerMenu.module.css';

export default function ExchangerMenu({
  setIsShowMenu,
  gameMoney,
  updateGameMoney,
  gamePer,
}) {
  const [isShowExchangeToMoney, setIsShowExchangeToMoney] = useState(false);
  const [isShowExchangeToGameMoney, setIsShowExchangeToGameMoney] =
    useState(false);
  const { money, updateMoney } = useUserDataContext();
  const [inputMoney, setInputMoney] = useState(0);
  const [inputGameMoney, setInputGameMoney] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'money') {
      setInputMoney(value);
    } else if (name === 'gameMoney') {
      setInputGameMoney(value);
    }
  };
  const handleClickExchangeToMoney = () => {
    setIsShowExchangeToMoney(true);
  };
  const handleClickExchangeToGameMoney = () => {
    setIsShowExchangeToGameMoney(true);
  };
  const handleCancelExchangeToMoney = () => {
    setIsShowExchangeToMoney(false);
  };
  const handleCancelExchangeToGameMoney = () => {
    setIsShowExchangeToGameMoney(false);
  };
  const handleSubmitExchangeToMoney = (e) => {
    e.preventDefault();
    if (inputGameMoney % 1000 || inputGameMoney < 1000) {
      alert('1000단위로 입력해주세요');
    } else if (inputGameMoney > gameMoney) {
      alert('소유하신 게임머니를 초과하는 금액입니다!');
    } else {
      updateMoney(money + parseInt(inputGameMoney / gamePer));
      updateGameMoney(gameMoney - inputGameMoney);
    }
  };
  const handleSubmitExchangeToGameMoney = (e) => {
    e.preventDefault();
    if (inputMoney % 1000 || inputMoney < 1000) {
      alert('1000단위로 입력해주세요');
    } else if (inputMoney > money) {
      alert('소유하신 재산을 초과하는 금액입니다!');
    } else {
      updateGameMoney(gameMoney + parseInt(inputMoney * gamePer));
      updateMoney(money - inputMoney);
    }
  };
  return (
    <PopupWrapper
      handleClickOther={() => {
        setIsShowMenu(false);
      }}
      isLeft={false}
    >
      <p className={styles.text}>{`재산 ${money}원`}</p>
      <p className={styles.text}>{`게임머니 ${gameMoney}원`}</p>
      <p className={styles.text}>{`비율: ${gamePer}:1`}</p>
      <button className={styles.btn} onClick={handleClickExchangeToMoney}>
        게임머니 {'=>'} 재산 (10000단위로)
      </button>
      {isShowExchangeToMoney && (
        <div className={styles.formDiv}>
          <form onSubmit={handleSubmitExchangeToMoney} className={styles.form}>
            <input
              type='number'
              value={inputGameMoney}
              name='gameMoney'
              onChange={handleChange}
            />
            <button className={styles.formBtn}>변환</button>
          </form>
          <button
            className={styles.formBtn}
            onClick={handleCancelExchangeToMoney}
          >
            취소
          </button>
        </div>
      )}
      <button className={styles.btn} onClick={handleClickExchangeToGameMoney}>
        재산 {'=>'} 게임머니 (1000단위)
      </button>
      {isShowExchangeToGameMoney && (
        <div className={styles.formDiv}>
          <form
            onSubmit={handleSubmitExchangeToGameMoney}
            className={styles.form}
          >
            <input
              type='number'
              name='money'
              value={inputMoney}
              onChange={handleChange}
            />
            <button className={styles.formBtn}>변환</button>
          </form>
          <button
            className={styles.formBtn}
            onClick={handleCancelExchangeToGameMoney}
          >
            취소
          </button>
        </div>
      )}
    </PopupWrapper>
  );
}
