import Search from "./search/search";
import SegmentMenu from "./segment-menu/segment-menu";

const Content = () => {
  return (
    <div className="min-w-[80%] md:min-w-[65%] lg:min-w-[40%] min-h-[200px] bg-white-100 dark:bg-soft-black-100 shadow-2xl rounded-lg p-4">
      <Search />
      <SegmentMenu />
    </div>
  );
};

export default Content;
