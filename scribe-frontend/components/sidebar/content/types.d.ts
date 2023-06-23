export interface DocumentItemProps {
  name: string,
  id: string
  type: 'file' | 'folder'
}

export interface FileItemProps extends DocumentItemProps { }
export interface FolderItemProps extends DocumentItemProps { }