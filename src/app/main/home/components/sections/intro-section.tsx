import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import TypingAnimation from "@/components/ui/typing-animation";


const IntroSection = () => {
  return (
    <div className="flex flex-col items-start space-y-6 w-full md:w-1/2">
      <span className="w-full text-3xl">Web Developer</span>
      <TypingAnimation>
        Hello, I&apos;m Anh Tu
      </TypingAnimation>
      <div className="flex space-x-6 mt-6 items-center">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-red-500 transition-all duration-100" />
        </a>
        <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl hover:text-red-500 transition-all duration-100" />
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl hover:text-red-500 transition-all duration-100" />
        </a>
      </div>
    </div>
  );
};


export default IntroSection;
