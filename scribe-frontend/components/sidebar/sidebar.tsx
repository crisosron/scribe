"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Resizer from "./resizer";
import Content from "./content/content";
import { useSidebarContext } from "@/lib/contexts/sidebar-context";
import { motion } from "framer-motion";

const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const {
    showSidebar,
    sidebarWidth,
    isResizing,
    startResizing,
    setSidebarRef,
  } = useSidebarContext();

  useEffect(() => {
    setSidebarRef(sidebarRef);
  }, []);

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
      className="min-h-screen max-h-screen min-w-[50px] max-w-[300px] md:max-w-[500px] grow-0 shrink-0 flex bg-white-200 dark:bg-soft-black-100"
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
