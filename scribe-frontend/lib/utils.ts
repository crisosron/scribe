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

type MockDocumentItem = {
  id: string, name: string, type: 'file' | 'folder'
}

export const MOCK_DOCUMENT_ITEMS_WITH_FOLDER: MockDocumentItem[] = [
  {
    id: 'test-file-1',
    name: 'Test file 1.md',
    type: 'file'
  },
  {
    id: 'test-folder',
    name: 'Test Folder',
    type: 'folder'
  },
  {
    id: 'test-file-2',
    name: 'Test-file-2.md',
    type: 'file'
  },
]

export const MOCK_DOCUMENT_ITEMS_FILES_ONLY: MockDocumentItem[] = [
  {
    id: 'test-file-1-abc',
    name: 'Test file 1 abc.md',
    type: 'file'
  },
  {
    id: 'test-file-2-efg',
    name: 'Test-file-2-efg.md',
    type: 'file'
  },
]
