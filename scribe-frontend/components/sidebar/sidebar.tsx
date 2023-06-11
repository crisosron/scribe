'use client'

import { useState, useRef, useCallback, useEffect } from 'react';
import Resizer from "./resizer";
import Content from "./content";

const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(200);
  
  const toggleResizing = () => {
    setIsResizing((prev) => !prev);
  }

  const resize = useCallback((mouseEvent: MouseEvent) => {
    if (isResizing && sidebarRef.current) { 
      const newWidth = mouseEvent.clientX - sidebarRef.current.getBoundingClientRect().left 
      setSidebarWidth(newWidth);
    }
  }, [isResizing])

  useEffect(() => { 
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', toggleResizing);

    return () => { 
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', toggleResizing);
    }
  }, [resize])

  return (
    <div
      ref={sidebarRef}
      style={{ width: sidebarWidth }}
      className="min-h-screen min-w-[150px] max-w-screen md:max-w-[300px] border border-white grow-0 shrink-0 flex"
      onMouseDown={(e) => e.preventDefault() }
    >
      <Content />
      <Resizer
        onMouseDown={(e) => { e.preventDefault(); toggleResizing(); }}
      />
    </div>
  )
}

export default Sidebar;
