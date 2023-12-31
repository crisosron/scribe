import { SVG_COMPONENT_DEFAULTS, SvgComponentProps } from "../utils";

const SingleFileIcon = ({
  width,
  height,
  fill,
  className,
}: SvgComponentProps) => {
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
      <path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z" />
    </svg>
  );
};

export default SingleFileIcon;
