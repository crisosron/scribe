import Command, { CommandProperties } from '../command';

export default class ToggleSidebarCommand extends Command {
  constructor(properties: CommandProperties) {
    super(properties);
  }
  
  // Note: the toggle sidebar command is a frontend-only command
  action(): void {
    // console.log('Toggle sidebar command');
  }

}
