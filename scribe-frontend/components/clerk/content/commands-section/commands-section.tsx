import { Command } from "../content";
import CommandItem from "./command-item";

type Props = {
  commands: Command[]
}

const CommandsSection = ({ commands }: Props) => {
  return (
    <div className="w-full text-sm my-4">
      {commands && commands.length > 0 && commands.map((command) => {
        return <CommandItem key={command.id} {...command} />
      })}
    </div>
  )
}

export default CommandsSection;