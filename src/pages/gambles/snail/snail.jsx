import React from 'react';
import Container from '../../../components/snail/container/container';
import WinnerProvider from '../../../context/snail/WinnerContext';
import styles from './Snail.module.css';

export default function Snail() {
  return (
    <div className={styles.wrapper}>
      <WinnerProvider>
        <Container></Container>
      </WinnerProvider>
    </div>
  );
}
