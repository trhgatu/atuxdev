import { useTheme } from "next-themes";
import ShineBorder from "@/components/ui/shine-border";

const AvatarSection = () => {
  const { theme } = useTheme();

  return (
    <div className="items-center flex justify-center max-w-full">
      <ShineBorder
        borderRadius={9999}
        borderWidth={4}
        color={theme === "red" ? "white" : "red"}
        className="w-40 h-40 sm:w-56 sm:h-56 md:w-96 md:h-96"
      >
        <img
          src="/assets/image/tu2.jpg"
          alt="Anh Tu"
          className="w-full h-full object-cover rounded-full border-4 border-black"
        />
      </ShineBorder>
    </div>
  );
};

export default AvatarSection;
