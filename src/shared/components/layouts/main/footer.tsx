// components/Footer.tsx
import Link from "next/link";
import { Divider } from "antd";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto py-10 mt-10 max-w-5xl">
      <Divider className="dark:bg-slate-300" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">

        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="flex justify-center items-center text-xl font-semibold mt-4">
            <span>Made by</span>
            <span className="text-red-600 ml-1">trhgatu</span>
          </span>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "Building awesome projects, one line at a time."
          </blockquote>
        </div>

        {/* Column 2: Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <ul className="flex space-x-5 mt-3">
            <li>
              <a
                href="https://github.com/trhgatu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black dark:hover:text-white transition duration-300"
              >
                <FaGithub size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/trhgatu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaFacebook size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/th_atu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={26} />
              </a>
            </li>
          </ul>
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
