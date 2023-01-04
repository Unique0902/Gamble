import React from 'react';
import { useState } from 'react';
import styles from './hoverBtn.module.css';

export default function HoverBtn({ text, handleClick, children }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <p className={styles.text}>{text}</p>

      {isHovering && <ul className={styles.btnList}>{children}</ul>}
    </button>
  );
}
