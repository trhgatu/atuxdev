import ShineBorder from "@/components/ui/shine-border";

const AvatarSection = () => {

  return (
    <div className="items-center flex justify-center">
      <ShineBorder
        borderRadius={9999}
        borderWidth={6}
        duration={15}
        color={["#880808", "#EE4B2B", "	#A52A2A"]}
        className="w-10 h-10 sm:w-24 sm:h-24 md:w-96 md:h-96"
      >
        <img
          src="/assets/image/tu2.jpg"
          alt="Anh Tu"
          className="w-full h-full object-cover rounded-full"
        />
      </ShineBorder>
    </div>
  );
};

export default AvatarSection;
