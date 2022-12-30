import React from "react";
import { useContext } from "react";
import { WinnerContext } from "../../../context/snail/winnerContext";

export default function Text({ text }) {
  const { winner } = useContext(WinnerContext);
  return (
    <>
      {winner.map((item, index) => (
        <p key={item}>{`${index + 1}등: ${item + 1}`}</p>
      ))}
    </>
  );
}
