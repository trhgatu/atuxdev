import IntroSection from "./sections/IntroSection";
import AvatarSection from "./sections/AvatarSection";

const Banner = () => {
  return (
    <div className="flex min-h-[calc(100vh-120px)] w-full flex-col items-center justify-center py-8">

      <div className="z-10 relative flex items-center justify-center w-full px-6 md:flex-row flex-col-reverse md:space-x-8">
        <IntroSection />
        <AvatarSection />
      </div>
    </div>
  );
};

export default Banner;
