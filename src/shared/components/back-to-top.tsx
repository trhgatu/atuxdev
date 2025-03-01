"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>

            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: isHovered
                  ? [
                      "0 0 0 0 rgba(239, 68, 68, 0)",
                      "0 0 0 10px rgba(239, 68, 68, 0.1)",
                      "0 0 0 20px rgba(239, 68, 68, 0)",
                    ]
                  : "0 0 0 0 rgba(239, 68, 68, 0)",
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>

            <motion.div
              animate={{ y: isHovered ? -3 : 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
              className="relative z-10"
            >
              <FaArrowUp className="text-xl" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;