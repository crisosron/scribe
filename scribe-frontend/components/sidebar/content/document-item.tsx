import FileItem from "./file-item";
import FolderItem from "./folder-item";
import { DocumentItemProps } from "./types";

const DocumentItem = (props: DocumentItemProps) => {
  const { type } = props;
  return (
    <div className="text-sm rounded-r-sm">
      {type === "file" ? <FileItem {...props} /> : <FolderItem {...props} />}
    </div>
  );
};

export default DocumentItem;
