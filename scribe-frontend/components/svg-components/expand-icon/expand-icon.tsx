import { SvgComponentProps, SVG_COMPONENT_DEFAULTS } from "../utils";

const ExpandIcon = ({ width, height, className }: SvgComponentProps) => {
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
      <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
    </svg>
  );
};

export default ExpandIcon;
