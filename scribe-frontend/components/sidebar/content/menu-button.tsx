import { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import { SvgComponentProps } from "@/components/svg-components/utils";

type Props = {
  Icon: FC<SvgComponentProps>,
  children?: ReactNode,
  active?: boolean
}

const MenuButton = ({ children, Icon, active }: Props) => {
  const [isActive, setIsActive] = useState(active);

  const toggleActive = () => { 
    setIsActive((prev) => !prev);
  }

  return (
    <div
      onClick={toggleActive}
      className={
        classNames(
          "min-h-[50px] w-full flex justify-center items-center hover:bg-white-100 transition cursor-pointer hover:dark:bg-white-600",
          { "bg-sky-blue-100": isActive }
        )
      }>
      <Icon className={ 
        classNames(
          'fill-soft-black-100 dark:fill-white-200 transition',
        )
      } />
    </div>
  )
}

export default MenuButton;