"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import useHotkey from "../hooks/useHotkey";
import CommandRegistry from "../classes/command-registry";
import HotkeyRegistry, { HOTKEY_IDS } from "../classes/hotkey-registry";

type GlobalContextProviderProps = {
  children?: ReactNode;
};

type GlobalContextValue = {
  toggleClerk: () => void;
  isClerkOpen: boolean;
  commandRegistry: CommandRegistry;
  hotkeyRegistry: HotkeyRegistry;
};

const GlobalContext = createContext<GlobalContextValue>({
  toggleClerk: () => undefined,
  isClerkOpen: false,
  commandRegistry: CommandRegistry.instance,
  hotkeyRegistry: HotkeyRegistry.instance
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
  const hotkeyRegistry = HotkeyRegistry.instance;

  useHotkey({
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.TOGGLE_CLERK ),
    callback: () => toggleClerk()
  });

  useHotkey({
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.ESC),
    callback: () => setIsClerkOpen(false)
  })

  useHotkey({
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.OPEN_FILE),
    callback: () => commandRegistry.findCommand({ id: 'open-file' })
  })

  useHotkey({
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.SAVE_FILE),
    callback: () => commandRegistry.findCommand({ id: 'save-file' })
  })

  const toggleClerk = () => {
    setIsClerkOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider
      value={{
        isClerkOpen,
        toggleClerk,
        commandRegistry,
        hotkeyRegistry
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
