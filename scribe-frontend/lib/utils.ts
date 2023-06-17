export const MOCK_CONTEXT_MENU_ACTIONS = [
  {
    label: 'New file',
    name: 'new-file',
    fn: () => { console.log('Triggered Action: New file') }
  },
  {
    label: 'Rename file',
    name: 'rename-file',
    fn: () => { console.log('Triggered Action: Rename file') }
  },
  {
    label: 'Delete file',
    name: 'delete-file',
    fn: () => { console.log('Triggered Action: Delete File') }
  }
]