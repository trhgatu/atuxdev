import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import TypingAnimation from "@/components/ui/typing-animation";


const IntroSection = () => {
  return (
    <div className="flex flex-col items-start space-y-6 w-full md:w-1/2">
      <span className="w-full text-3xl">Web Developer</span>
      <TypingAnimation>
        Hello, I&apos;m Anh Tu
      </TypingAnimation>

    </div>
  );
};


export default IntroSection;
