// components/Footer.tsx
import Link from "next/link";
import { Divider } from "antd";
import { FaGithub, FaFacebook, FaInstagram, FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto py-10 mt-10">
      <Divider className="dark:bg-slate-100" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Column 1: Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:underline">
                Changelog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Social */}
        <div>
          <h3 className="text-lg font-bold mb-4">Social</h3>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support My Work */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support my work</h3>
          <p className="mb-4">If you like my work, consider buying me a coffee!</p>
          <a
            href="https://www.buymeacoffee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
          >
            <FaCoffee className="mr-2" />
            Buy a Coffee
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
