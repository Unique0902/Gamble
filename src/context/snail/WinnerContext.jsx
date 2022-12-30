import { createContext, useState } from "react";
import React from "react";

export const WinnerContext = createContext();

export default function WinnerProvider({ children }) {
  const [winner, setWinner] = useState([]);
  return <WinnerContext.Provider value={{ winner, setWinner }}>{children}</WinnerContext.Provider>;
}
