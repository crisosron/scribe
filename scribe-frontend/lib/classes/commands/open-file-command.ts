import Command, { CommandProperties } from "../command";

export default class OpenFileCommand implements Command {
  type: "action" | "file";
  label: string;
  id: string;

  constructor(properties: CommandProperties) {
    this.type = properties.type;
    this.label = properties.label;
    this.id = properties.id;
  }
  
  execute(): void {
    throw new Error("Execute open file command");
  }
}