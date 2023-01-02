import React from "react";
import { useContext } from "react";
import { useWinnerContext } from "../../../context/snail/WinnerContext";

export default function Text({ text }) {
  const { winner } = useWinnerContext();
  return (
    <>
      {winner.map((item, index) => (
        <p key={item}>{`${index + 1}등: ${item + 1}`}</p>
      ))}
    </>
  );
}
