import { SvgComponentProps, SVG_COMPONENT_DEFAULTS } from "../utils";

const DotMenuIcon = ({ width, height, className }: SvgComponentProps) => {
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
      <path d="M207.858-432Q188-432 174-446.142q-14-14.141-14-34Q160-500 174.142-514q14.141-14 34-14Q228-528 242-513.858q14 14.141 14 34Q256-460 241.858-446q-14.141 14-34 14Zm272 0Q460-432 446-446.142q-14-14.141-14-34Q432-500 446.142-514q14.141-14 34-14Q500-528 514-513.858q14 14.141 14 34Q528-460 513.858-446q-14.141 14-34 14Zm272 0Q732-432 718-446.142q-14-14.141-14-34Q704-500 718.142-514q14.141-14 34-14Q772-528 786-513.858q14 14.141 14 34Q800-460 785.858-446q-14.141 14-34 14Z" />
    </svg>
  );
};

export default DotMenuIcon;
