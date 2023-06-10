import { ReactNode } from "react";

type Props = {
  children?: ReactNode
}

const EditorContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-1 flex-col min-h-screen border border-green">{ children }</div>
  )
}

export default EditorContainer;