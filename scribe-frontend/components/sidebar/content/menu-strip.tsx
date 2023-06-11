import { MultiFileIcon, SettingsIcon } from "@/components/svg-components"
import MenuButton from "./menu-button"
import { useSidebarContext } from "@/lib/contexts/sidebar-context";

const MenuStrip = () => {
  const { showSidebar, toggleSidebar } = useSidebarContext();
  return (
    <div className="min-h-screen md:min-w-[50px] flex flex-col flex-end">
      <div className="flex flex-col flex-1 grow">
        <MenuButton onClick={toggleSidebar} Icon={MultiFileIcon} active={showSidebar} />
      </div>
      <div className="flex flex-col flex-1 justify-end grow-0">
        <MenuButton Icon={SettingsIcon} />
      </div>
    </div>
  )
}

export default MenuStrip