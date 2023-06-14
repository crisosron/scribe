import LogoBar from "./logo-bar";
import OfficeItem from "./office-item";

const SidebarItems = () => {
  return (
    <div className="flex-1">
      <LogoBar />

      {/* TODO: Render office items */}
      <OfficeItem type="local" name="Test local office" />
      <OfficeItem type="cloud" name="Test cloud office" />
    </div>
  );
};

export default SidebarItems;
