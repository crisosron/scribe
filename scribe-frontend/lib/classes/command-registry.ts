import Command, { CommandSearchProperties } from "./command";
import OpenFileCommand from "./commands/open-file-command";
import SaveFileCommand from "./commands/save-file-command";
import HotkeyRegistry, { HOTKEY_IDS } from "./hotkey-registry";

export default class CommandRegistry {
  private static singletonInstance: CommandRegistry;
  private _openFileCommand: Command;
  private _saveFileCommand: Command;
  private _commands: Command[];

  private constructor() {
    const hotkeyRegistry = HotkeyRegistry.instance;

    this._openFileCommand = new OpenFileCommand({ type: 'action', label: 'Open File', id: 'open-file', hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.OPEN_FILE) });
    this._saveFileCommand = new SaveFileCommand({ type: 'action', label: 'Save File', id: 'save-file', hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.SAVE_FILE) });

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

  // TODO: Implement a find fn much like HotkeyRegistry
  public findCommand(commandDetails: CommandSearchProperties) {
    console.log('Find a command with the following details: ', commandDetails);
  }
}