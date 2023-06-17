"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Resizer from "./resizer";
import Content from "./content/content";
import { useSidebarContext } from "@/lib/contexts/sidebar-context";
import { motion } from "framer-motion";

const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const { showSidebar } = useSidebarContext();

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
      if (isResizing && sidebarRef.current) {
        const newWidth =
          mouseEvent.clientX - sidebarRef.current.getBoundingClientRect().left;

        // Prevent resize when this width threshold is reached because otherwise the hover options
        // in each OfficeItem will not be visible
        if (newWidth <= 250) return;

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

  return (
    <motion.div
      animate={{
        width: isResizing ? sidebarWidth : showSidebar ? sidebarWidth : 50,
      }}
      transition={{
        type: "tween",
        duration: 0.1,
      }}
      ref={sidebarRef}
      className="min-h-screen max-h-screen min-w-[50px] max-w-screen md:max-w-[400px] grow-0 shrink-0 flex bg-white-200 dark:bg-soft-black-100"
      onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
    >
      <Content />
      <Resizer
        onMouseDown={(e) => {
          e.preventDefault();
          startResizing();
        }}
        active={isResizing}
      />
    </motion.div>
  );
};

export default Sidebar;
