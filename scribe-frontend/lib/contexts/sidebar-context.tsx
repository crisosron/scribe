'use client'

import { ReactNode, createContext, useContext, useState } from "react";

type SidebarContextValues = {
  showSidebar: boolean
  toggleSidebar: () => void;
}

type SidebarContextProviderProps = {
  children?: ReactNode
}

const SidebarContext = createContext<SidebarContextValues>({
  showSidebar: false,
  toggleSidebar: () => undefined
});

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) { 
    throw new Error('Attempted to use SidebarContext within a component outside of SidebarContextProvider');
  }
  return context;
}

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => { 
    setShowSidebar((prev) => !prev);
  }

  return (
    <SidebarContext.Provider value={{
      showSidebar,
      toggleSidebar
    }}>
      { children }
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

