import { useGlobalContext } from "@/lib/contexts/global-context";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Overlay = ({ children }: Props) => {
  const { toggleClerk } = useGlobalContext();
  return (
    <div 
      className="absolute w-[100vw] h-[100vh] z-[100] bg-soft-black-600/25 dark:bg-soft-black-600/50 flex justify-center items-start pt-4 md:pt-28"
      onClick={toggleClerk}
    >
      {children}
    </div>
  );
};

export default Overlay;
