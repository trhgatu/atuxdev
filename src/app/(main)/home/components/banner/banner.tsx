import Intro from "./intro";
import Avatar from "./avatar";
import AnimatedGridPattern from "@/shared/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Banner = () => {
  return (
    <div className="flex md:pt-12 w-full flex-col items-center justify-center">
      <div className="z-10 relative flex items-center justify-center w-full max-w-5xl md:flex-row flex-col-reverse md:space-x-8">
        <Intro />
        <Avatar />
      </div>
      <AnimatedGridPattern
        numSquares={60}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
};

export default Banner;
