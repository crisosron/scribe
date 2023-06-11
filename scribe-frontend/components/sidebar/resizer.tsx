import classNames from "classnames";

type Props = {
  onMouseDown: (e: any) => void
  active?: boolean
};

const Resizer = ({ onMouseDown, active }: Props) => { 
  return (
    <div
      onMouseDown={onMouseDown}
      className={classNames(
        "resize-x grow-0 shrink-0 justify-self-end hover:w-[0.5px] hover:bg-white-400 dark:hover:bg-white-200 cursor-col-resize basis-[6px] transition",
        { "w-[0.5px] bg-white-400 dark:bg-white-200": active }
      )}
    />
  )
}

export default Resizer;