"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Section = {
  id: string;
  name: string;
};

const sections: Section[] = [
  { id: "banner", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "journey", name: "Journey" },
  { id: "projects", name: "Projects" },
  { id: "testimonials", name: "Testimonials" }
];

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState("banner");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoverSection, setHoverSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < lastScrollY || scrollY < 100);
      setLastScrollY(scrollY);
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight / 3;

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <motion.div
      className="fixed right-8 top-1/3 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0.3,
        x: 0,
        scale: isVisible ? 1 : 0.9
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -z-10 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-red-500/10 to-rose-500/5 blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {sections.map((section) => (
        <div
          key={section.id}
          className="relative group"
          onMouseEnter={() => setHoverSection(section.id)}
          onMouseLeave={() => setHoverSection(null)}
        >
          <motion.button
            onClick={() => scrollToSection(section.id)}
            className={`w-4 h-4 rounded-full relative overflow-hidden ${
              activeSection === section.id
                ? "shadow-[0_0_10px_2px_rgba(239,68,68,0.6)]"
                : "shadow-sm"
            }`}
            whileHover={{ scale: 1.3 }}
            animate={{
              backgroundColor: activeSection === section.id ? "#ef4444" : "#d1d5db",
            }}
            transition={{ duration: 0.2 }}
          >
            {activeSection === section.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 opacity-80"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </motion.button>

          <motion.span
            className="absolute right-7 translate-x-[-100%] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-sm font-medium bg-white/90 dark:bg-gray-800/90 px-3 py-1.5 rounded-md shadow-lg border border-red-100 dark:border-red-900/30"
            initial={{ x: -5, opacity: 0 }}
            animate={{
              x: hoverSection === section.id ? 0 : -5,
              opacity: hoverSection === section.id ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-red-500 dark:text-red-400">{section.name}</span>

            <span className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 bg-white dark:bg-gray-800 border-r border-t border-red-100 dark:border-red-900/30"></span>
          </motion.span>

          {activeSection === section.id && (
            <motion.span
              layoutId="activeIndicator"
              className="absolute inset-[-3px] rounded-full border-2 border-red-500"
              initial={false}
              animate={{
                boxShadow: ["0 0 0px rgba(239,68,68,0.3)", "0 0 8px rgba(239,68,68,0.6)", "0 0 0px rgba(239,68,68,0.3)"]
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          )}
        </div>
      ))}

      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-[1px] -z-10 transform -translate-x-1/2"
        style={{
          background: "linear-gradient(to bottom, transparent, #ef4444 30%, #ef4444 70%, transparent)"
        }}
        animate={{
          height: "100%",
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default SideNavigation;