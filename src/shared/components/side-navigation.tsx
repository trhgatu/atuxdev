"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Section = {
  id: string;
  name: string;
  icon?: string;
};

const sections: Section[] = [
  { id: "banner", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "journey", name: "Journey" },
  { id: "projects", name: "Projects" },
];

export const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState("banner");
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY < 200 || scrollY < window.innerHeight * 0.1);

    // Throttled section detection
    const viewportHeight = window.innerHeight;
    const scrollPosition = scrollY + viewportHeight * 0.3;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed right-8 top-1/2 -translate-y-1/2 z-40",
        "hidden lg:flex flex-col items-center",
        "transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-30"
      )}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0.3, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 w-16 h-full bg-gradient-to-b from-red-500/5 via-red-500/10 to-red-500/5 rounded-full blur-sm -z-10" />

      {/* Connection line */}
      <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent -translate-x-1/2 -z-10" />

      <div className="flex flex-col space-y-4 py-4">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="relative group"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <motion.button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative w-3 h-3 rounded-full transition-all duration-200",
                  "hover:scale-125 focus:outline-none focus:ring-2 focus:ring-red-500/50",
                  isActive
                    ? "bg-red-500 shadow-lg shadow-red-500/40"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-red-400"
                )}
                whileTap={{ scale: 0.9 }}
                aria-label={`Navigate to ${section.name}`}
              >
                {/* Active indicator ring */}
                {isActive && (
                  <motion.div
                    className="absolute inset-[-4px] rounded-full border border-red-500/50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, x: 10, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {section.name}
                      </span>
                      {/* Tooltip arrow */}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-white dark:border-l-gray-800 border-y-[4px] border-y-transparent" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.nav>
  );
};