import { Dispatch, SetStateAction } from "react";
import { Command } from "../content";
import CommandItem from "./command-item";

type Props = {
  commands: Command[]
  selectedCommand: Command;
  setSelectedCommand: Dispatch<SetStateAction<Command>>
}

const CommandsSection = ({ commands, setSelectedCommand, selectedCommand }: Props) => {
  return (
    <div className="w-full text-sm my-4">
      {commands && commands.length > 0 && commands.map((command) => {
        return <CommandItem onHover={() => setSelectedCommand(command)} key={command.id} {...command} active={selectedCommand.id === command.id} />
      })}
    </div>
  )
}

export default CommandsSection;