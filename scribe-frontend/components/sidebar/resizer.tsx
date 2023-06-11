type Props = {
  onMouseDown: (e: any) => void
};

const Resizer = ({ onMouseDown }: Props) => { 
  return (
    <div
      onMouseDown={onMouseDown}
      className="resize-x grow-0 shrink-0 justify-self-end cursor-col-resize hover:w-[1px] hover:bg-slate-400 basis-[6px] transition" />
  )
}

export default Resizer;