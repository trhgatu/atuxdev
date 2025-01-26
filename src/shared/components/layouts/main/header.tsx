"use client";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../../darkmode-toggle";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold hover:scale-105 transition-all hover:text-red-500 duration-100">trhgatu</Link>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6 items-center">
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link
                href="mailto:trananhtu1112003@gmail.com"
                className="flex items-center space-x-2 px-6 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/get-in-touch"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 px-6 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
