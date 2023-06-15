import { motion } from "framer-motion";

const DocumentBar = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 200 }}
      exit={{ height: 0 }}
      className="whitespace-nowrap overflow-hidden border border-gold-100"
    >
      Document Bar
    </motion.div>
  );
};

export default DocumentBar;
