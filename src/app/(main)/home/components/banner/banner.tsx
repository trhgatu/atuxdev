import Intro from "./intro";
import Avatar from "./avatar";

const Banner = () => {
  return (
    <div className="flex md:pt-12 w-full flex-col items-center justify-center">
      <div className="z-10 relative flex items-center justify-center w-full max-w-5xl md:flex-row flex-col-reverse md:space-x-8">
        <Intro />
        <Avatar />
      </div>
    </div>
  );
};

export default Banner;
