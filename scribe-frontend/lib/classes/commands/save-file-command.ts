import Command, { CommandProperties } from '../command';

export default class SaveFileCommand extends Command {
  constructor(properties: CommandProperties) {
    super(properties);
  }
  
  action(): void {
    console.log('Execute save file command');
  }
}
