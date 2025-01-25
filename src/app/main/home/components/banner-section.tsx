import IntroSection from "./sections/intro-section";
import AvatarSection from "./sections/avatar-section";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const BannerSection = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center pb-24">
      <div className="z-10 relative flex items-center justify-center w-full px-6 md:flex-row flex-col-reverse md:space-x-8">
        <IntroSection />
        <AvatarSection />
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

export default BannerSection;
