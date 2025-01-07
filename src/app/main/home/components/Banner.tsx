import IntroSection from "./sections/IntroSection";
import AvatarSection from "./sections/AvatarSection";

const Banner = () => {
  return (
    <div className="flex h-[calc(100vh-120px)] w-full flex-col items-center justify-center">
      <div className="z-10 flex items-center justify-between w-full px-6 md:flex-row flex-col-reverse md:space-x-8">
        <IntroSection />
        <AvatarSection />
      </div>
    </div>
  );
};

export default Banner;
