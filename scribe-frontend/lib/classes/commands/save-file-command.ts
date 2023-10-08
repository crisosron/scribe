import Command, { CommandProperties, Hotkey } from '../command';

export default class SaveFileCommand implements Command {
  type: "action" | "file";
  label: string;
  id: string;
  hotkey?: Hotkey;

  constructor(properties: CommandProperties) {
    this.type = properties.type;
    this.label = properties.label;
    this.id = properties.id;
    this.hotkey = properties.hotkey;
  }
  
  execute(): void {
    throw new Error("Execute save file command");
  }
}
