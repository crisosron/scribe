import { useState } from "react";
import DotMenuIcon from "@/components/svg-components/dot-menu-icon/dot-menu-icon";
import ExpandIcon from "@/components/svg-components/expand-icon/expand-icon";
import classNames from "classnames";

type Props = {
  type: "local" | "cloud";
  name: string;
  items?: object[]; // TODO: TBD
};

const OfficeItem = ({ type = "cloud", name, items }: Props) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered((prev) => !prev);
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
    return (
      <div className="flex">
        <div className="dark:hover:bg-white-700 rounded-sm transition mr-2">
          <DotMenuIcon className="dark:fill-white-100" />
        </div>
        <div className="dark:hover:bg-white-700 rounded-sm transition">
          <ExpandIcon className="dark:fill-white-100 rotate-[270deg]" />
        </div>
      </div>
    );
  };

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="whitespace-nowrap overflow-hidden p-2 text-sm hover:bg-white-100 transition cursor-pointer hover:dark:bg-white-600 rounded-r-sm flex justify-between items-center"
    >
      <div>
        <div className="mb-2">{name}</div>
        <div className="text-xs">{renderTypeTag()}</div>
      </div>
      <div>{hovered && renderHoverOptions()}</div>
    </div>
  );
};

export default OfficeItem;
