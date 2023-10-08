export type Hotkey = {
  controlKeys: string[],
  actionKey: string
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

export default interface Command extends CommandProperties {
  // type: 'action' | 'file',
  // label: string,
  // id: string,
  execute(): void
}