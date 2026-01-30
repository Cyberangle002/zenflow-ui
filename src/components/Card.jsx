import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars


export default function Card({ children, className = "", gradient = false, onClick }) {
  return (
    <motion.div
      whileHover={{ y: gradient ? -2 : 0 }}
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition-all ${
        gradient ? "hover:shadow-xl" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}