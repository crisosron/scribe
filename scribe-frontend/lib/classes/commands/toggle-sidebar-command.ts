import Command, { CommandProperties } from '../command';
import type { Hotkey } from '../hotkey-registry';

export default class ToggleSidebarCommand implements Command {
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
    throw new Error("Execute toggle sidebar command");
  }
}
