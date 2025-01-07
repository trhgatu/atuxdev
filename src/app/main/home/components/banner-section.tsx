import IntroSection from "./sections/intro-section";
import AvatarSection from "./sections/avatar-section";

const BannerSection = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center pb-24">
      <div className="z-10 relative flex items-center justify-center w-full px-6 md:flex-row flex-col-reverse md:space-x-8">
        <IntroSection />
        <AvatarSection />
      </div>
    </div>
  );
};

export default BannerSection;
