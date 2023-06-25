import { useState, MouseEvent } from "react";
import classNames from "classnames";
import ExpandIcon from "@/components/svg-components/expand-icon/expand-icon";
import FolderIcon from "@/components/svg-components/folder-icon/folder-icon";
import DocumentBar from "./document-bar";
import { motion, AnimatePresence } from "framer-motion";
import DotMenuIcon from "@/components/svg-components/dot-menu-icon/dot-menu-icon";
import ContextMenu from "./context-menu";
import {
  MOCK_CONTEXT_MENU_ACTIONS,
  MOCK_DOCUMENT_ITEMS_FILES_ONLY,
} from "@/lib/utils";
import { FolderItemProps } from "./types";
import { useSidebarContext } from "@/lib/contexts/sidebar-context";

const FolderItem = ({ name, id }: FolderItemProps) => {
  const { toggleOpenedFolder, openedFolders } = useSidebarContext();

  const [hovered, setHovered] = useState(false);
  const [contextMenuOpened, setContextMenuOpened] = useState(false);
  const [opened, setOpened] = useState(openedFolders.includes(`${name}-${id}`));

  const toggleOpen = () => {
    setContextMenuOpened(false);
    setOpened((prev) => !prev);
    toggleOpenedFolder(`${name}-${id}`);
  };

  const toggleHover = () => {
    if (hovered) setContextMenuOpened(false);
    setHovered((prev) => !prev);
  };

  const toggleContextMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    setContextMenuOpened((prev) => !prev);
  };

  const resetStates = () => {
    setHovered(false);
    setContextMenuOpened(false);
  };

  return (
    <>
      <div
        className="p-2 flex hover:bg-white-100 hover:dark:bg-white-600 transition cursor-pointer justify-between"
        onClick={toggleOpen}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className="flex">
          <FolderIcon width={20} height={20} className="mr-2" />
          {name}
        </div>
        <div className="flex">
          {hovered && (
            <>
              <div
                className="hover:bg-white-250 dark:hover:bg-white-700 rounded-sm transition mr-2"
                onClick={toggleContextMenuOpen}
              >
                <DotMenuIcon width={20} height={20} />
                {contextMenuOpened && (
                  <ContextMenu
                    actions={MOCK_CONTEXT_MENU_ACTIONS}
                    resetParentStates={resetStates}
                  />
                )}
              </div>
              <div className="hover:bg-white-250 dark:hover:bg-white-700 rounded-sm transition">
                <ExpandIcon
                  width={20}
                  height={20}
                  className={classNames("rotate-[270deg] transition", {
                    "rotate-[360deg]": opened,
                  })}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <AnimatePresence>
        {opened && (
          <div className="ml-4">
            <DocumentBar
              items={MOCK_DOCUMENT_ITEMS_FILES_ONLY}
              className="border-l border-white-300 dark:border-white-500"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FolderItem;
