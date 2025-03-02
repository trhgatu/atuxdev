"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "../../darkmode-toggle";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["banner", "about", "skills", "journey", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial set
    setVh();

    // Update on resize and orientation change
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-background/40 backdrop-blur-sm"
          }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="py-4">
          <div className="container max-w-5xl mx-auto flex items-center justify-between px-4">
            <div className="flex items-center">
              <Link href="/home" className="text-2xl font-bold hover:scale-105 transition-all hover:text-red-500 duration-100">
                trhgatu
              </Link>
            </div>
            {/* Desktop menu */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-6 items-center">
                {["about", "skills", "journey", "projects"].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="relative py-1 px-2 overflow-hidden group"
                    >
                      <span className={`relative z-10 transition-colors duration-300 ${activeSection === section ? "text-red-500" : "group-hover:text-red-500"}`}>
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${activeSection === section ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </button>
                  </li>
                ))}
                <li>
                  <Link href="/blog" className="relative py-1 px-2 overflow-hidden group">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-red-500">
                      Blog
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>

                <li><ModeToggle /></li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"
                    }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    } top-2`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile menu overlay with AnimatePresence */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                className="fixed inset-0 bg-black/60 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
                style={{
                  height: 'calc(var(--vh, 1vh) * 100)',
                  width: '100%',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
              />
            )}
          </AnimatePresence>

          {/* Mobile menu with AnimatePresence */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="md:hidden fixed top-0 right-0 w-4/5 max-w-sm shadow-2xl z-50 overflow-hidden border-l border-border bg-white"
                style={{
                  height: 'calc(var(--vh, 1vh) * 100)',
                  backgroundColor: 'var(--theme-mode) === "dark" ? "#202020" : "white"',
                }}
              >
                <div className="flex flex-col h-full dark:bg-[#202020] bg-white">
                  <motion.div
                    variants={itemVariants}
                    className="p-6 border-b border-border dark:bg-[#202020] bg-white"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-red-500">trhgatu</div>
                        <div className="text-sm mt-1 text-muted-foreground">Portfolio & Blog</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
                        aria-label="Close menu"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>

                  <div className="flex-1 py-8 px-6 overflow-y-auto dark:bg-[#202020] bg-white">
                    <motion.div className="space-y-1">
                      {["projects", "journey", "skills"].map((section, index) => (
                        <motion.button
                          key={section}
                          variants={itemVariants}
                          custom={index}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollToSection(section)}
                          className={`w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 flex items-center ${activeSection === section ? "bg-accent text-red-500" : "hover:bg-accent"
                            }`}
                        >
                          <span className="text-lg font-medium">
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                          </span>
                          {activeSection === section && (
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="ml-auto"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </motion.span>
                          )}
                        </motion.button>
                      ))}
                      <motion.div
                        variants={itemVariants}
                        custom={3}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left py-3 px-4 rounded-lg hover:bg-accent transition-colors duration-200"
                      >
                        <Link href="/blog" className="flex items-center">
                          <span className="text-lg font-medium">Blog</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        custom={4}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left py-3 px-4 rounded-lg hover:bg-accent transition-colors duration-200"
                      >
                        <Link href="/resume" className="flex items-center">
                          <span className="text-lg font-medium">Resume</span>
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="mt-8 pt-6 border-t border-border"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-medium">Switch theme</span>
                        <ModeToggle />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Link
                          href="mailto:trananhtu1112003@gmail.com"
                          className="w-full flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="mr-2">Get in touch</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="p-6 border-t border-border mt-auto dark:bg-[#202020] bg-white"
                  >
                    <div className="text-sm text-muted-foreground">
                      © 2023 trhgatu
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
