import { motion } from "framer-motion";
import DocumentItem from "./document-item";

const DocumentBar = () => {
  // TODO: The given array of documents should be ordered by alphabetical order before rendering
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className="whitespace-nowrap overflow-hidden"
    >
      {/* TODO: Render DocumentItems */}
      <DocumentItem type="file" />
      <DocumentItem type="file" />
      <DocumentItem type="folder" />
      <DocumentItem type="file" />
    </motion.div>
  );
};

export default DocumentBar;
