import { createContext, useState, useContext } from "react";
import React from "react";

const WinnerContext = createContext();

export default function WinnerProvider({ children }) {
  const [winner, setWinner] = useState([]);
  return <WinnerContext.Provider value={{ winner, setWinner }}>{children}</WinnerContext.Provider>;
}

export function useWinnerContext() {
  return useContext(WinnerContext);
}
