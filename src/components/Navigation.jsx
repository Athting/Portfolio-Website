import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}) {
  return (
    <div className="flex justify-between items-center mt-8">
      <motion.button
        onClick={onPrev}
        disabled={currentPage === 0}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 disabled:opacity-50 disabled:hover:bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-400/30 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={20} className="text-blue-200" />
        <span className="text-blue-200 font-medium">Previous</span>
      </motion.button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentPage
                ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                : "bg-white/30 hover:bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      <motion.button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 disabled:opacity-50 disabled:hover:bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-400/30 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-blue-200 font-medium">Next</span>
        <ChevronRight size={20} className="text-blue-200" />
      </motion.button>
    </div>
  );
}
