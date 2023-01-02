import React from "react";
import Container from "../../../components/snail/container/container";
import WinnerProvider from "../../../context/snail/winnerContext";
import styles from "./snail.module.css";

export default function Snail() {
  return (
    <div className={styles.wrapper}>
      <WinnerProvider>
        <Container></Container>
      </WinnerProvider>
    </div>
  );
}
