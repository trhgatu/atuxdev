import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import { motion } from "framer-motion";

const AvatarSection = () => {
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

        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-red-500"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className="absolute bottom-10 -left-10 w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-red-600"
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />

        <ShineBorder
          borderRadius={9999}
          borderWidth={6}
          duration={15}
          color={["#880808", "#EE4B2B", "#A52A2A"]}
          className="w-10 h-10 sm:w-24 sm:h-24 md:w-96 md:h-96"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/image/tu2.jpg"
              alt="Anh Tu"
              width={300}
              height={300}
              className="rounded-full h-full w-full object-cover"
              priority
            />
          </motion.div>
        </ShineBorder>

        <motion.div
          className="absolute -bottom-6 right-10 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Web Developer
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AvatarSection;
