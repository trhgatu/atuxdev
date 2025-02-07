// components/Footer.tsx
import Link from "next/link";
import { Divider } from "antd";
import { FaGithub, FaFacebook, FaInstagram, FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto py-10 mt-10">
      <Divider className="dark:bg-white" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold">Made with ❤️ by trhgatu</h3>
          <p className="text-sm text-gray-400 mt-2">
            Building awesome projects, one line at a time.
          </p>
        </div>

        {/* Column 2: Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <ul className="flex space-x-5 mt-3">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black dark:hover:text-white transition duration-300"
              >
                <FaGithub size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaFacebook size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={26} />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support My Work */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Support My Work</h3>
          <p className="text-sm text-gray-400 mt-2">
            If you love my work, consider buying me a coffee! ☕
          </p>
          <a
            href="https://www.buymeacoffee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center px-5 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition duration-300"
          >
            <FaCoffee className="mr-2" size={20} />
            Buy Me a Coffee
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} trhgatu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
