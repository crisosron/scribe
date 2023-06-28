const Search = () => {
  return (
    <div className="w-full h-[35px] md:h-[50px] rounded-md bg-white-400 dark:bg-soft-black-400 flex items-center">
      <div className="w-[37px] md:w-[52px] mr-2 h-full border border-gold">
        {/* TODO: Add search logo */}
      </div>
      <input type="text" className="w-full h-[30px] md:h-[50px] rounded-md bg-white-400 dark:bg-soft-black-400 border-none focus:outline-none" />
    </div>
  )
}

export default Search;