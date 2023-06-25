"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type GlobalContextProviderProps = {
  children?: ReactNode;
};

type GlobalContextValue = {
  toggleClerk: () => void;
  isClerkOpen: boolean;
};

const GlobalContext = createContext<GlobalContextValue>({
  toggleClerk: () => undefined,
  isClerkOpen: false,
});

export const useGlobalContext = () => {
  try {
    return useContext(GlobalContext);
  } catch (error) {
    throw new Error(
      "Attempted to use GlobalContext outside of GlobalContextProvider"
    );
  }
};

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [isClerkOpen, setIsClerkOpen] = useState(false);

  const toggleClerk = () => {
    console.log("toggled clerk");
    setIsClerkOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider
      value={{
        isClerkOpen,
        toggleClerk,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
