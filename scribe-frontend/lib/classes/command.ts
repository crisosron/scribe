import type { Hotkey } from "./hotkey-registry"

export type CommandExecuteParameters = {
  action?: () => void;
}

export type CommandProperties = {
  type: 'action' | 'file',
  label: string,
  id: string,
  hotkey?: Hotkey
}

export type CommandSearchProperties = {
  type?: 'action' | 'file',
  label?: string,
  id?: string
}

export default abstract class Command {
  private _type: 'action' | 'file'
  private _label: string
  private _id: string
  private _hotkey?: Hotkey

  abstract action(): void
  _additionalAction?(): void

  constructor(properties: CommandProperties) {
    this._type = properties.type;
    this._label = properties.label;
    this._id = properties.id;
    this._hotkey = properties.hotkey;
  }

  get id() {
    return this._id;
  }

  get label() {
    return this._label;
  }

  get hotkey() {
    return this._hotkey;
  }

  get type() {
    return this._type;
  }

  set additionalAction(action: () => void) {
    this._additionalAction = action;
  }

  executeCommand() {
    this.action();
    if(this._additionalAction) this._additionalAction();
  }
}