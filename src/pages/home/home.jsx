import React from 'react';
import styles from './home.module.css';
import { FcGoogle } from 'react-icons/fc';
import { useAuthContext } from '../../context/AuthContext';
import DesignWrapper from '../../components/designWrapper/designWrapper';
export default function Home() {
  const { login } = useAuthContext();
  const handleClick = () => {
    login();
  };
  return (
    <DesignWrapper>
      <section className={styles.titleSec}>
        <h1 className={styles.title}>Gamble</h1>
        <h2 className={styles.subTitle}>부자되세요 ^^</h2>
        <button className={styles.btn} onClick={handleClick}>
          <FcGoogle className={styles.icon} />
          Google로 로그인
        </button>
      </section>
    </DesignWrapper>
  );
}
