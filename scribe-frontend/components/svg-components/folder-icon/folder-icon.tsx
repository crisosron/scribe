import { SvgComponentProps, SVG_COMPONENT_DEFAULTS } from "../utils";

const FolderIcon = ({ width, height, className }: SvgComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || SVG_COMPONENT_DEFAULTS.HEIGHT}
      viewBox="0 -960 960 960"
      width={width || SVG_COMPONENT_DEFAULTS.WIDTH}
      className={`fill-soft-black-100 dark:fill-white-200 ${
        className || ""
      }`.trim()}
    >
      <path d="M141-160q-24 0-42-18.5T81-220v-520q0-23 18-41.5t42-18.5h280l60 60h340q23 0 41.5 18.5T881-680v460q0 23-18.5 41.5T821-160H141Zm0-580v520h680v-460H456l-60-60H141Zm0 0v520-520Z" />
    </svg>
  );
};

export default FolderIcon;
