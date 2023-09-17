import Command, { CommandSearchProperties } from "./command";
import OpenFileCommand from "./commands/open-file-command";
import SaveFileCommand from "./commands/save-file-command";

export default class CommandRegistry {
  private static singletonInstance: CommandRegistry;
  private _openFileCommand: Command;
  private _saveFileCommand: Command;
  private _commands: Command[];

  private constructor() {
    this._openFileCommand = new OpenFileCommand({ type: 'action', label: 'Open File', id: 'open-file' });
    this._saveFileCommand = new SaveFileCommand({ type: 'action', label: 'Save File', id: 'save-file' });

    this._commands = [
      this._openFileCommand,
      this._saveFileCommand
    ];
  }

  public static get instance() {
    if(!CommandRegistry.singletonInstance) CommandRegistry.singletonInstance = new CommandRegistry();
    return CommandRegistry.singletonInstance;
  }

  public get allCommands() {
    return this._commands;
  }

  public findCommand(commandDetails: CommandSearchProperties) {
    console.log('Find a command with the following details: ', commandDetails);
  }
}