// components/Header.tsx
import Link from "next/link";
import { ModeToggle } from "../../darkmode-toggle";
const Header = () => {
  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Anh Tu</span>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/work-with-me" className="flex items-center space-x-2 px-6 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                Work with me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
