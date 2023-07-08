import { ChangeEvent, useState } from "react";
import SearchIcon from "@/components/svg-components/search-icon/search-icon";

const Search = () => {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className="w-full h-[35px] md:h-[50px] rounded-md bg-white-200 dark:bg-soft-black-400 flex items-center mb-4">
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
        className="w-full h-[30px] md:h-[50px] rounded-md bg-white-200 dark:bg-soft-black-400 border-none focus:outline-none" 
      />
    </div>
  )
}

export default Search;