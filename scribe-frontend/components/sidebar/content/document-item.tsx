import FileItem from "./file-item";
import FolderItem from "./folder-item";

type Props = {
  type: "file" | "folder";
};

const DocumentItem = ({ type }: Props) => {
  return (
    <div className="text-sm rounded-r-sm">
      {type === "file" ? <FileItem /> : <FolderItem />}
    </div>
  );
};

export default DocumentItem;
