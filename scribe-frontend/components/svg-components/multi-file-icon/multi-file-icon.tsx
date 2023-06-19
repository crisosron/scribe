import { SvgComponentProps, SVG_COMPONENT_DEFAULTS } from "../utils";

const MultiFileIcon = ({ width, height, className }: SvgComponentProps) => {
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
      <path d="M780-160H260q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18ZM578-662v-198H260v640h520v-442H578ZM140-40q-24 0-42-18t-18-42v-619h60v619h498v60H140Zm120-820v198-198 640-640Z" />
    </svg>
  );
};

export default MultiFileIcon;
