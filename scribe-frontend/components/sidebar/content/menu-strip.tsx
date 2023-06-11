import { MultiFileIcon, SettingsIcon } from "@/components/svg-components"
import MenuButton from "./menu-button"

const MenuStrip = () => {
  return (
    <div className="min-h-screen md:min-w-[50px] flex flex-col flex-end">
      <div className="flex flex-col flex-1 grow">
        <MenuButton Icon={MultiFileIcon} />
      </div>
      <div className="flex flex-col flex-1 justify-end grow-0">
        <MenuButton Icon={SettingsIcon} />
      </div>
    </div>
  )
}

export default MenuStrip