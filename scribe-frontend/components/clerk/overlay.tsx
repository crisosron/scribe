import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Overlay = ({ children }: Props) => {
  return (
    <div className="absolute w-[100vw] h-[100vh] z-[100] bg-soft-black-600/25 dark:bg-soft-black-600/50 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Overlay;
