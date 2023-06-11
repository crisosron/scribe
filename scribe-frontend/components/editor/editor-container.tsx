import { ReactNode } from "react";

type Props = {
  children?: ReactNode
}

const EditorContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-1 flex-col min-h-screen bg-white-100 dark:bg-soft-black-400">{ children }</div>
  )
}

export default EditorContainer;