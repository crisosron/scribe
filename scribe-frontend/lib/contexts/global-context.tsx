"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useKeys, { KeyCombination } from "../hooks/useKeys";

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
  const { latestKeyCombination } = useKeys();

  const clerkKeyComboPressed = (keyCombo: KeyCombination) => {
    return (
      (keyCombo.controlKey === "Meta" || keyCombo.controlKey === "Control") &&
      keyCombo.actionKey === "p"
    );
  };

  const toggleClerk = () => {
    setIsClerkOpen((prev) => !prev);
  };

  useEffect(() => {
    if (clerkKeyComboPressed(latestKeyCombination)) toggleClerk();
  }, [latestKeyCombination]);

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
