"use client";
import React, { createContext, useState } from "react";

const ToggleContext = createContext<{
  toggleMood: boolean;
  setterMood: () => void;
} | null>(null);

const ToggleMood = ({ children }: { children: React.ReactNode }) => {
  const [toggleMood, setToggleMood] = useState<boolean>(true);

  const setterMood = () => {
    setToggleMood(!toggleMood);
  };
  return (
    <ToggleContext.Provider
      value={{
        toggleMood,
        setterMood,
      }}
    >
      <main>{children}</main>
    </ToggleContext.Provider>
  );
};
const useToggleMood = () => {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggleMood must be used within a ToggleMood");
  }
  return context;
};
export { useToggleMood };
export default ToggleMood;
