import { MouseEvent, useState } from "react";
import DotMenuIcon from "@/components/svg-components/dot-menu-icon/dot-menu-icon";
import ExpandIcon from "@/components/svg-components/expand-icon/expand-icon";
import DocumentBar from "./document-bar";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";

type Props = {
  type: "local" | "cloud";
  name: string;
  items?: object[]; // TODO: TBD
};

const OfficeItem = ({ type = "cloud", name, items }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState(false);
  const [moreOptionsOpened, setMoreOptionsOpened] = useState(false);

  const toggleHover = () => {
    setHovered((prev) => !prev);
  };

  const toggleOpen = () => {
    setOpened((prev) => !prev);
  };

  const toggleMoreOptionsOpened = () => {
    setMoreOptionsOpened((prev) => !prev);
  };

  const handleMoreOptionsClicked = (e: MouseEvent) => {
    e.stopPropagation();
    toggleMoreOptionsOpened();
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

  const renderHoverOptions = () => {
    const HOVER_OPTION_CLASSNAMES =
      "hover:bg-white-250 dark:hover:bg-white-700 rounded-sm transition";
    return (
      <div className="flex">
        <div
          onClick={handleMoreOptionsClicked}
          className={`${HOVER_OPTION_CLASSNAMES} mr-2`}
        >
          <DotMenuIcon className="dark:fill-white-100" />
        </div>
        <div className={`${HOVER_OPTION_CLASSNAMES}`}>
          <ExpandIcon
            className={classNames(
              "dark:fill-white-100 rotate-[270deg] transition",
              {
                "rotate-[360deg]": opened,
              }
            )}
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
        className="whitespace-nowrap overflow-hidden p-2 text-sm hover:bg-white-100 transition cursor-pointer hover:dark:bg-white-600 rounded-r-sm flex justify-between items-center"
      >
        <div>
          <div className="mb-2">{name}</div>
          <div className="text-xs">{renderTypeTag()}</div>
        </div>
        <div>{hovered && renderHoverOptions()}</div>
      </div>
      <AnimatePresence>{opened && <DocumentBar />}</AnimatePresence>
    </>
  );
};

export default OfficeItem;
