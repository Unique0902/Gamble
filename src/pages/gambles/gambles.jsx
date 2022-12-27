import React from 'react';
import DesignWrapper from '../../components/designWrapper/designWrapper';
import styles from './gambles.module.css';

export default function Gambles() {
  return (
    <DesignWrapper>
      <section className={styles.titleSec}>
        <h1 className={styles.title}>Gambles</h1>
        <h2 className={styles.subTitle}>부자 되세요 ^^</h2>
      </section>
    </DesignWrapper>
  );
}
