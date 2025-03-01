import { TextAnimate } from "@/components/ui/text-animate";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const IntroSection = () => {
  return (
    <div className="mt-10 flex flex-col md:items-start items-center space-y-6 w-full md:w-1/2">
      <span className={`${oswald.className} font-light text-6xl text-left sm:text-center`}>Hello, I&apos;m</span>
      <TextAnimate
        className={`${oswald.className} text-6xl sm:text-7xl md:text-9xl sm:text-center font-semibold text-red-600`}
        animation="blurIn"
        as="h1"
      >
        Anh Tu
      </TextAnimate>

      <span className="mt-10 uppercase text-slate-600 dark:text-slate-300 tracking-widest max-w-prose">
        A Passionate{" "}
        <TypeAnimation
          sequence={[
            "Web Developer", 3000,
            "Software Developer", 3000
          ]}
          cursor={true}
          repeat={Infinity}
        />
      </span>
      <div className="flex space-x-6 mt-6">
        <Link href="https://linkedin.com/in/trhgatu1103" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-700 transition" />
        </Link>
        <Link href="https://github.com/trhgatu" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-400 transition" />
        </Link>
        <Link href="https://instagram.com/th_atu" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-pink-500 hover:text-pink-600 transition" />
        </Link>
        <Link href="https://facebook.com/trhgatu" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-blue-700 hover:text-blue-800 transition" />
        </Link>
      </div>
      <Link
        href="mailto:trananhtu1112003@gmail.com"
        className="mt-6 px-6 py-2 bg-red-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-red-700 transition duration-300"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default IntroSection;
