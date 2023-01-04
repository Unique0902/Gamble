import React from 'react';
import styles from './gamble.module.css';
import { Outlet } from 'react-router-dom';
import GambleHeader from '../../components/gambleHeader/gambleHeader';

export default function Gamble() {
  return (
    <section className={styles.wrapper}>
      <GambleHeader />
      <Outlet />
    </section>
  );
}
