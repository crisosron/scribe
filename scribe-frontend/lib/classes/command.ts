export type CommandProperties = {
  type: 'action' | 'file',
  label: string,
  id: string
}

export type CommandSearchProperties = {
  type?: 'action' | 'file',
  label?: string,
  id?: string
}

export default interface Command {
  type: 'action' | 'file',
  label: string,
  id: string,
  execute(): void
}