import { useState } from "react";
import classNames from "classnames";
import ExpandIcon from "@/components/svg-components/expand-icon/expand-icon";
import FolderIcon from "@/components/svg-components/folder-icon/folder-icon";
import DocumentBar from "./document-bar";
import { AnimatePresence } from "framer-motion";

const FolderItem = () => {
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleOpened = () => {
    setOpened((prev) => !prev);
  };

  const toggleHovered = () => {
    setHovered((prev) => !prev);
  };

  return (
    <>
      <div
        className="p-2 flex hover:bg-white-100 hover:dark:bg-white-600 transition cursor-pointer justify-between"
        onClick={toggleOpened}
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
      >
        <div className="flex">
          <FolderIcon width={20} height={20} className="mr-2" />
          folder
        </div>
        <div className="flex">
          {hovered && (
            <ExpandIcon
              width={20}
              height={20}
              className={classNames("rotate-[270deg] transition", {
                "rotate-[360deg]": opened,
              })}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {opened && (
          <div className="ml-2">
            <DocumentBar />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FolderItem;
