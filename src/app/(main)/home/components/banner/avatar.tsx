import ShineBorder from "@/shared/components/ui/shine-border";
import Image from "next/image";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div
      className="items-center flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}

    >
      <div className="relative">
        <motion.div
          className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-br from-red-500/20 to-rose-500/10 blur-2xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <ShineBorder
          borderRadius={9999}
          borderWidth={6}
          duration={15}
          color={["#880808", "#EE4B2B", "#A52A2A"]}
          className="w-10 h-10 sm:w-24 sm:h-24 md:w-96 md:h-96"
        >
          <Image
            src="/assets/image/tu2.jpg"
            alt="Anh Tu"
            width={600}
            height={600}
            className="rounded-full h-full w-full object-cover"
            priority
          />
        </ShineBorder>
      </div>
    </motion.div>
  );
};

export default Avatar;
