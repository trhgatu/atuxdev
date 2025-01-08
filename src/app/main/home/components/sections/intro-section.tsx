import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { TextAnimate } from "@/components/ui/text-animate";


const IntroSection = () => {
  return (
    <div className="flex flex-col items-start space-y-6 w-full md:w-1/2">
      <span className="w-full mt-10 uppercase text-slate-600 dark:text-slate-300 tracking-widest max-w-prose">Web Developer</span>
      <span className="text-7xl">Hello, I&apos;m</span>
      <TextAnimate className="text-8xl font-bold" animation="blurIn" as="h1">
         Anh Tu
      </TextAnimate>
    </div>
  );
};


export default IntroSection;
