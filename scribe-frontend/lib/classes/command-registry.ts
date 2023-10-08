import Command, { CommandSearchProperties, Hotkey } from "./command";
import OpenFileCommand from "./commands/open-file-command";
import SaveFileCommand from "./commands/save-file-command";

export default class CommandRegistry {
  private static singletonInstance: CommandRegistry;
  private _openFileCommand: Command;
  private _saveFileCommand: Command;
  private _commands: Command[];

  private constructor() {

    // See lib/keyboard-utils for a list of valid control and action keys
    const openFileHotkey: Hotkey = {
      controlKeys: ['Control'],
      actionKey: 'o'
    }

    const saveFileHotkey: Hotkey = {
      controlKeys: ['Control'],
      actionKey: 's'
    }

    this._openFileCommand = new OpenFileCommand({ type: 'action', label: 'Open File', id: 'open-file', hotkey: openFileHotkey });
    this._saveFileCommand = new SaveFileCommand({ type: 'action', label: 'Save File', id: 'save-file', hotkey: saveFileHotkey });

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