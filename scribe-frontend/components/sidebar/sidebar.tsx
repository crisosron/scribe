'use client'

import { useState, useRef, useCallback, useEffect } from 'react';
import Resizer from "./resizer";
import Content from "./content/content";
import SidebarContextProvider, { useSidebarContext } from '@/lib/contexts/sidebar-context';

const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(200);

  // Note that a 'toggleResize' fn isn't implemented as 'toggleResize' will trigger every time the
  // 'mouseup' event is triggered (see useEffect)
  const startResizing = () => { 
    setIsResizing(true);
  }

  const stopResizing = () => { 
    setIsResizing(false);
  }

  const resize = useCallback((mouseEvent: MouseEvent) => {
    if (isResizing && sidebarRef.current) { 
      const newWidth = mouseEvent.clientX - sidebarRef.current.getBoundingClientRect().left 
      setSidebarWidth(newWidth);
    }
  }, [isResizing])

  useEffect(() => { 
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);

    return () => { 
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    }
  }, [resize])

  return (
    <SidebarContextProvider>
      <div
        ref={sidebarRef}
        style={{ width: sidebarWidth }}
        className="min-h-screen min-w-[150px] max-w-screen md:max-w-[300px] grow-0 shrink-0 flex bg-white-200 dark:bg-soft-black-100"
        onMouseDown={(e) => e.preventDefault() }
      >
        <Content />
        <Resizer
          onMouseDown={(e) => { e.preventDefault(); startResizing(); }}
          active={ isResizing }
        />
      </div>
    </SidebarContextProvider>
  )
}

export default Sidebar;
