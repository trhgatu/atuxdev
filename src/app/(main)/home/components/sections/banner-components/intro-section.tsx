import { TextAnimate } from "@/components/ui/text-animate";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const IntroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="mt-10 flex flex-col md:items-start items-center space-y-6 w-full md:w-1/2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.span
        className={`${oswald.className} font-light text-6xl text-left sm:text-center`}
        variants={item}
      >
        Hello, I&apos;m
      </motion.span>

      <motion.div variants={item}>
        <TextAnimate
          className={`${oswald.className} text-6xl sm:text-7xl md:text-9xl sm:text-center font-semibold text-red-600`}
          animation="blurIn"
          as="h1"
        >
          Anh Tu
        </TextAnimate>
      </motion.div>

      <motion.span
        className="mt-10 uppercase text-slate-600 dark:text-slate-300 tracking-widest max-w-prose"
        variants={item}
      >
        A Passionate{" "}
        <TypeAnimation
          sequence={[
            "Web Developer", 3000,
            "Software Developer", 3000,
            "UI/UX Enthusiast", 3000,
            "Problem Solver", 3000
          ]}
          cursor={true}
          repeat={Infinity}
          className="text-red-500 font-medium"
        />
      </motion.span>

      <motion.div
        className="flex space-x-6 mt-6"
        variants={item}
      >
        <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://linkedin.com/in/trhgatu1103" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-400 dark:border-gray-800 hover:border-blue-600/50 transition-all duration-300">
              <FaLinkedin className="text-2xl text-blue-600" />
            </div>
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://github.com/trhgatu" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-400 dark:border-gray-800 hover:border-gray-500/50 transition-all duration-300">
              <FaGithub className="text-2xl text-gray-900 dark:text-gray-100" />
            </div>
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://instagram.com/th_atu" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-400 dark:border-gray-800 hover:border-pink-500/50 transition-all duration-300">
              <FaInstagram className="text-2xl text-pink-500" />
            </div>
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://facebook.com/trhgatu" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-400 dark:border-gray-800 hover:border-blue-700/50 transition-all duration-300">
              <FaFacebook className="text-2xl text-blue-700" />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="mailto:trananhtu1112003@gmail.com"
            className="mt-6 px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium text-lg rounded-full shadow-md transition-all duration-300 inline-flex items-center"
          >
            <span>Contact Me</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;
