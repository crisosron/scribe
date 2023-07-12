import { useMatchesBreakpoint } from "@/lib/hooks/useMatchesBreakpoint";
import { Space_Mono as SpaceMono } from "next/font/google";

const highlightFont = SpaceMono({ subsets: ['latin'], weight: '400' });

const HintBar = () => {

  const isMobile = useMatchesBreakpoint('sm');

  if(isMobile) return null;

  return (
    <div className="flex justify-center items-center w-full h-[30px] bg-white-300 dark:bg-soft-black-300 text-xs mb-4 rounded-b-md text-soft-black-100 dark:text-white-400">
      <div className="inline md:mx-2">
        <span className="text-xs md:text-md">&#8593;</span> {/* Up arrow character */}
        <span className="text-xs md:text-md">&#8595;</span> {/* Down arrow character */}
        <span className="mx-2">to navigate</span>
      </div>

      <div className="inline md:mx-2">
        <span className="text-lg">&#8677;</span> {/* Tab character */}
        <span className="mx-2">to switch</span>
      </div>

      <div className="inline md:mx-2">
        <span className="text-md">&#8629;</span> {/* Enter character */}
        <span className="mx-2">to use</span>
      </div>

      <div className="inline md:mx-2">
        <span className={`${highlightFont.className} text-xs`}>esc</span>
        <span className="mx-2">to exit</span>
      </div>
    </div>
  )
}

export default HintBar;