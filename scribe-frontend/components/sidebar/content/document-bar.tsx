import { motion } from "framer-motion";
import DocumentItem from "./document-item";
import { DocumentItemProps } from "./types";

type Props = {
  items: DocumentItemProps[];
};

const DocumentBar = ({ items }: Props) => {
  // TODO: The given array of documents should be ordered by alphabetical order before rendering
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className="whitespace-nowrap overflow-hidden"
    >
      {items.length > 0 &&
        items.map((item, index) => (
          <DocumentItem key={`document-item-${index}`} {...item} />
        ))}
    </motion.div>
  );
};

export default DocumentBar;
