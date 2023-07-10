import classNames from "classnames";
import { ChangeEvent, useState } from "react";
import SearchIcon from "@/components/svg-components/search-icon/search-icon";
import { useMatchesBreakpoint } from "@/lib/hooks/useMatchesBreakpoint";

const Search = () => {
  const [value, setValue] = useState<string>('');
  const isMobile = useMatchesBreakpoint('sm');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className={
      classNames(
        'w-full h-[35px] md:h-[50px] bg-white-200 dark:bg-soft-black-400 flex items-center mb-4', 
        { 'rounded-t-md mb-0': !isMobile } // Make compatible with hint bar
    )}>
      <div className="w-[37px] md:w-[52px] h-full flex justify-center items-center">
        <SearchIcon className="h-6 w-6 md:h-[30px] md:w-[30px] fill-white-500 dark:fill-white-400" />
      </div>
      <input 
        name="search-input"
        placeholder="Need some help...?"
        type="text"
        value={value}
        onChange={handleInputChange}
        autoFocus
        autoComplete="off"
        className="w-full h-[30px] md:h-[50px] rounded-md bg-white-200 dark:bg-soft-black-400 border-none focus:outline-none" 
      />
    </div>
  )
}

export default Search;