import Resizer from "./resizer";
import Content from "./content";

const Sidebar = () => {
  return (
    <div className="flex-1 min-h-screen min-w-[150px] max-w-screen md:max-w-[300px] border border-white grow-0 shrink-0 flex basis-[6px]">
      <Content />
      <Resizer />
    </div>
  )
}

export default Sidebar;
