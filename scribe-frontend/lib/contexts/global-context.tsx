"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import useHotkey from "../hooks/useHotkey";
import CommandRegistry from "../classes/command-registry";

type GlobalContextProviderProps = {
  children?: ReactNode;
};

type GlobalContextValue = {
  toggleClerk: () => void;
  isClerkOpen: boolean;
  commandRegistry: CommandRegistry;
};

const GlobalContext = createContext<GlobalContextValue>({
  toggleClerk: () => undefined,
  isClerkOpen: false,
  commandRegistry: CommandRegistry.instance
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
  const commandRegistry = CommandRegistry.instance;
  useHotkey({
    targetControlKeys: ["Meta", "Control"],
    targetActionKey: "p",
    callback: () => toggleClerk()
  });

  useHotkey({
    targetActionKey: 'Escape',
    callback: () => setIsClerkOpen(false)
  })

  const toggleClerk = () => {
    setIsClerkOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider
      value={{
        isClerkOpen,
        toggleClerk,
        commandRegistry
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
