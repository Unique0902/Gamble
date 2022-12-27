import React from 'react';
import { useState } from 'react';
import DesignWrapper from '../../components/designWrapper/designWrapper';
import { useAuthContext } from '../../context/AuthContext';
import styles from './userMake.module.css';

export default function UserMake() {
  const [name, setName] = useState();
  const { uid } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <DesignWrapper>
      <section className={styles.titleSec}>
        <h1 className={styles.title}>유저 생성</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' />
          <button>제출</button>
        </form>
      </section>
    </DesignWrapper>
  );
}
