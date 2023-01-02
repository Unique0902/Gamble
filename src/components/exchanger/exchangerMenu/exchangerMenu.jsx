import React from 'react';
import { useState } from 'react';
import { useUserDataContext } from '../../../context/UserDataContext';
import PopupWrapper from '../../popupWrapper/popupWrapper';
import styles from './exchangerMenu.module.css';

export default function ExchangerMenu({ setIsShowMenu, gameMoney, game }) {
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
    updateMoney(inputMoney);
  };
  const handleSubmitExchangeToGameMoney = (e) => {
    e.preventDefault();
  };
  return (
    <PopupWrapper
      handleClickOther={() => {
        setIsShowMenu(false);
      }}
      isLeft={false}
    >
      <p className={styles.text}>{`보유재산 ${money}원`}</p>
      <p className={styles.text}>{`보유게임머니 ${gameMoney}원`}</p>
      <p className={styles.text}>{`비율: 5:1`}</p>
      <button className={styles.btn} onClick={handleClickExchangeToMoney}>
        재산으로 변환 (1000단위로)
      </button>
      {isShowExchangeToMoney && (
        <div className={styles.formDiv}>
          <form onSubmit={handleSubmitExchangeToMoney} className={styles.form}>
            <input
              type='number'
              value={inputMoney}
              name='money'
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
        게임머니로 변환 (1000단위)
      </button>
      {isShowExchangeToGameMoney && (
        <div className={styles.formDiv}>
          <form
            onSubmit={handleSubmitExchangeToGameMoney}
            className={styles.form}
          >
            <input
              type='number'
              name='gameMoney'
              value={inputGameMoney}
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
