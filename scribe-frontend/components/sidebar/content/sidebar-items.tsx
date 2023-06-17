import LogoBar from "./logo-bar";
import OfficeItem from "./office-item";

const SidebarItems = () => {
  return (
    <div className="flex-1 max-h-screen overflow-y-auto">
      <LogoBar />

      {/* TODO: Render office items */}
      <OfficeItem type="cloud" name="Test cloud office" />
    </div>
  );
};

export default SidebarItems;
