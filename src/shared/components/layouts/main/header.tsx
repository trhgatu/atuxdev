"use client";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../../darkmode-toggle";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/40 z-50 fixed top-0 left-0 w-full backdrop-blur-md"
      style={{ height: "var(--header-height)" }}>
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
              {["projects", "journey", "blog", "skills", "resume"].map((section) => (
                <li key={section}>
                  <button onClick={() => scrollToSection(section)} className="hover:text-red-500 transition-all duration-300">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
              <li><ModeToggle /></li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-3xl"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu">
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        <nav className={`md:hidden fixed top-0 left-0 w-full h-full transform transition-transform duration-300 bg-white dark:bg-black
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex flex-col items-center space-y-6 py-16">
            {["projects", "journey", "blog", "skills", "resume"].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)}
                className="text-lg font-medium hover:text-red-500 transition-all duration-300">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <ModeToggle />
            <Link href="mailto:trananhtu1112003@gmail.com"
              className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}>
              Get in touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
