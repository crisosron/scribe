import Command, { CommandProperties } from "../command";

export default class OpenFileCommand extends Command {
  constructor(properties: CommandProperties) {
    super(properties);
  }
  
  action(): void {
    console.log('Open file command');
  }
}