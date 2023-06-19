import { MouseEvent, useState } from "react";
import DotMenuIcon from "@/components/svg-components/dot-menu-icon/dot-menu-icon";
import ExpandIcon from "@/components/svg-components/expand-icon/expand-icon";
import DocumentBar from "./document-bar";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import ContextMenu from "./context-menu";
import {
  MOCK_CONTEXT_MENU_ACTIONS,
  MOCK_DOCUMENT_ITEMS_WITH_FOLDER,
} from "@/lib/utils";
import { useSidebarContext } from "@/lib/contexts/sidebar-context";

type Props = {
  type: "local" | "cloud";
  name: string;
  items?: object[]; // TODO: TBD
};

const OfficeItem = ({ type = "cloud", name, items }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState(false);
  const [contextMenuOpened, setContextMenuOpened] = useState(false);
  const { sidebarWidth, showSidebar } = useSidebarContext();

  const toggleHover = () => {
    if (hovered) setContextMenuOpened(false);
    setHovered((prev) => !prev);
  };

  const toggleOpen = () => {
    setContextMenuOpened(false);
    setOpened((prev) => !prev);
  };

  const toggleContextMenuOpen = () => {
    setContextMenuOpened((prev) => !prev);
  };

  const handleContextMenuClicked = (e: MouseEvent) => {
    e.stopPropagation();
    toggleContextMenuOpen();
  };

  const resetStates = () => {
    setHovered(false);
    setContextMenuOpened(false);
  };

  const renderTypeTag = () => {
    return (
      <span
        className={classNames(
          "bg-white-250 dark:bg-white-700 px-2 border-l-4 rounded-r-sm",
          { "border-gold-100": type === "local" },
          { "border-green-100": type === "cloud" }
        )}
      >
        {type === "local" ? "Local" : "Cloud"}
      </span>
    );
  };

  const renderOptions = () => {
    const HOVER_OPTION_CLASSNAMES =
      "hover:bg-white-250 dark:hover:bg-white-700 rounded-sm transition";
    return (
      <div className="flex">
        <div
          onClick={handleContextMenuClicked}
          className={`${HOVER_OPTION_CLASSNAMES} mr-2`}
        >
          <DotMenuIcon />
          <AnimatePresence>
            {contextMenuOpened && (
              <ContextMenu
                actions={MOCK_CONTEXT_MENU_ACTIONS}
                resetParentStates={resetStates}
              />
            )}
          </AnimatePresence>
        </div>
        <div className={`${HOVER_OPTION_CLASSNAMES}`}>
          <ExpandIcon
            className={classNames({
              "transition rotate-[270deg]": showSidebar,
              "rotate-[360deg]": opened,
              "transform-none": !showSidebar,
            })}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={toggleOpen}
        className="p-2 text-sm hover:bg-white-100 transition cursor-pointer hover:dark:bg-white-600 rounded-r-sm flex justify-between items-center"
      >
        <div>
          {/* 
            The width of this div is dynamic so the ellipsis are only shown until we
            can show all the text. 

            The constant 150 is an arbitrary constant to give some distance between the text,
            and the hover options when the text is truncated
          */}
          <div
            className="whitespace-nowrap overflow-hidden text-ellipsis mb-2"
            style={{
              width: `${sidebarWidth - 150}px`,
            }}
          >
            {name}
          </div>
          <div className="text-xs">{renderTypeTag()}</div>
        </div>
        <div className="whitespace-nowrap overflow-hidden">
          {renderOptions()}
        </div>
      </div>
      <AnimatePresence>
        {opened && <DocumentBar items={MOCK_DOCUMENT_ITEMS_WITH_FOLDER} />}
      </AnimatePresence>
    </>
  );
};

export default OfficeItem;
