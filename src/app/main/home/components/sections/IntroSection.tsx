import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import TypingAnimation from "@/components/ui/typing-animation";

const IntroSection = () => {
  return (
    <div className="flex flex-col items-start space-y-4 w-full md:w-1/2">
      <span>Web Developer</span>
      <TypingAnimation className="text-7xl font-bold">Hello, I&apos;m Anh Tu</TypingAnimation>
      <p className="text-lg font-medium">
        I&apos;m a passionate developer, designer, and creator. Take a look at some of my projects below.
      </p>


      <div className="flex space-x-6 mt-6">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-red-500 transition-all duration-100" />
        </a>
        <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl hover:text-red-500 transition-all duration-100" />
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl hover:text-red-500 transition-all duration-100" />
        </a>

        <a
          href="/projects"
          className="flex items-center space-x-2 px-6 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <span>See all Project</span>
        </a>
      </div>
    </div>
  );
};

export default IntroSection;
