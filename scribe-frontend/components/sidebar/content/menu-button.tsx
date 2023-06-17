import { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import { SvgComponentProps } from "@/components/svg-components/utils";

type Props = {
  Icon: FC<SvgComponentProps>;
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const MenuButton = ({ children, Icon, active, onClick }: Props) => {
  const [isActive, setIsActive] = useState(active);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      onClick={() => {
        toggleActive();
        if (onClick) onClick();
      }}
      className={classNames(
        "min-h-[50px] w-full flex justify-center items-center hover:bg-white-100 transition cursor-pointer hover:dark:bg-white-600",
        { "shadow-inset-blue-left-border": isActive }
      )}
    >
      <Icon className="transition" />
    </div>
  );
};

export default MenuButton;
