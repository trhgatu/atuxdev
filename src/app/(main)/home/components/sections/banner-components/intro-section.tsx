import { TextAnimate } from "@/components/ui/text-animate";
import { TypeAnimation } from "react-type-animation";


const IntroSection = () => {
  return (
    <div className="mt-10 flex flex-col md:items-start items-center space-y-6 w-full md:w-1/2">
      <span className="text-6xl text-left sm:text-center">Hello, I&apos;m</span>
      <TextAnimate
        className="text-6xl sm:text-7xl md:text-9xl sm:text-center font-bold text-red-500"
        animation="blurIn"
        as="h1"
      >
        Anh Tu
      </TextAnimate>

      <span className="mt-10 uppercase text-slate-600 dark:text-slate-300 tracking-widest max-w-prose">
        A Passionate <TypeAnimation
          sequence={
            [
              "Web Developer", 3000,
              "Software Developer", 3000
            ]
          }
          cursor={true}
          repeat={Infinity} />
      </span>
    </div>

  );
};


export default IntroSection;
