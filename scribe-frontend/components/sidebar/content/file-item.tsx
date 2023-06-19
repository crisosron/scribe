import { SingleFileIcon } from "@/components/svg-components";

const FileItem = () => {
  return (
    <div className="flex p-2 hover:bg-white-100 hover:dark:bg-white-600 transition cursor-pointer">
      <SingleFileIcon width={20} height={20} className="mr-2" />
      filename.md
    </div>
  );
};

export default FileItem;
