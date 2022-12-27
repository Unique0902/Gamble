import React from 'react';
import { useState } from 'react';
import DesignWrapper from '../../components/designWrapper/designWrapper';
import { useUserDataContext } from '../../context/UserDataContext';
import styles from './userMake.module.css';

export default function UserMake() {
  const [name, setName] = useState('');
  const { makeUserData } = useUserDataContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    makeUserData(name);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <DesignWrapper>
      <section className={styles.titleSec}>
        <h1 className={styles.title}>유저 생성</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='이름 입력..'
            type='text'
            value={name}
            name='name'
            required
            onChange={handleChange}
          />
          <button>제출</button>
        </form>
      </section>
    </DesignWrapper>
  );
}
