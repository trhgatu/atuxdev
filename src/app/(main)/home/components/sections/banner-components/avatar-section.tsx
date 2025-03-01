import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
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
        <Image
          src="/assets/image/tu2.jpg"
          alt="Anh Tu"
          width={300}
          height={300}
          className="rounded-full h-full w-full object-cover"
        />
      </ShineBorder>
    </div>
  );
};

export default AvatarSection;
