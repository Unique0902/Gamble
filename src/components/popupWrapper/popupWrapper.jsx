import React, { useEffect, useRef } from 'react';
import styles from './popupWrapper.module.css';

export default function PopupWrapper({ handleClickOther, isLeft, children }) {
  const wrapperRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClickOther();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${isLeft ? styles.left : styles.right}`}
    >
      {children}
    </div>
  );
}
