import SearchIcon from "@/components/svg-components/search-icon/search-icon";

const Search = () => {
  return (
    <div className="w-full h-[35px] md:h-[50px] rounded-md bg-white-200 dark:bg-soft-black-400 flex items-center">
     <div className="w-[37px] md:w-[52px] h-full flex justify-center items-center">
        <SearchIcon className="fill-white-500 dark:fill-white-400"/>
      </div>
      <input type="text" className="w-full h-[30px] md:h-[50px] rounded-md bg-white-200 dark:bg-soft-black-400 border-none focus:outline-none" />
    </div>
  )
}

export default Search;