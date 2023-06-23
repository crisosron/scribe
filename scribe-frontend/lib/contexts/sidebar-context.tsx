"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  RefObject,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

type SidebarContextValues = {
  showSidebar: boolean;
  toggleSidebar: () => void;
  sidebarWidth: number;
  startResizing: () => void;
  setSidebarRef: Dispatch<
    SetStateAction<RefObject<HTMLDivElement> | undefined>
  >;
  sidebarRef: RefObject<HTMLDivElement> | undefined;
  isResizing: boolean;
  openedFolders: string[];
  toggleOpenedFolder: (folderId: string) => void;
};

type SidebarContextProviderProps = {
  children?: ReactNode;
};

const SidebarContext = createContext<SidebarContextValues>({
  showSidebar: false,
  toggleSidebar: () => undefined,
  sidebarWidth: 350,
  startResizing: () => undefined,
  setSidebarRef: () => undefined,
  sidebarRef: undefined,
  isResizing: false,
  openedFolders: [],
  toggleOpenedFolder: () => undefined,
});

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error(
      "Attempted to use SidebarContext within a component outside of SidebarContextProvider"
    );
  }
  return context;
};

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarRef, setSidebarRef] = useState<RefObject<HTMLDivElement>>();
  const [openedFolders, setOpenedFolders] = useState<string[]>([]);

  const toggleOpenedFolder = (folderId: string) => {
    if (openedFolders.includes(folderId)) {
      setOpenedFolders((prev) =>
        prev.filter((existingFolderId) => existingFolderId !== folderId)
      );
    } else {
      setOpenedFolders((prev) => [...prev, folderId]);
    }
  };

  // Note that a 'toggleResize' fn isn't implemented as 'toggleResize' will trigger every time the
  // 'mouseup' event is triggered (see useEffect)
  const startResizing = () => {
    setIsResizing(true);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = useCallback(
    (mouseEvent: MouseEvent) => {
      if (isResizing && sidebarRef?.current) {
        const newWidth =
          mouseEvent.clientX - sidebarRef?.current.getBoundingClientRect().left;

        // Prevent resize when this width threshold is reached because otherwise the hover options
        // in each OfficeItem will not be visible
        if (newWidth <= 250) return;

        // Prevent resize when this width threshold is reached because this is the max width
        // of the sidebar on desktop
        if (newWidth >= 500) return;

        setSidebarWidth(newWidth);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize]);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        sidebarWidth,
        sidebarRef,
        isResizing,
        startResizing,
        setSidebarRef,
        toggleSidebar,
        openedFolders,
        toggleOpenedFolder,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
