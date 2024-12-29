import IntroSection from "./sections/IntroSection";
import AvatarSection from "./sections/AvatarSection";

const Banner = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 flex items-center justify-between w-full px-6 py-10 pt-0 md:flex-row flex-col-reverse">
        <IntroSection />
        <AvatarSection />
      </div>
    </div>
  );
};

export default Banner;
