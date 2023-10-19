"use client";

// Framer motion
import { motion } from "framer-motion";

// Styles
import styles from "../styles";

// Utils
import { staggerContainer, fadeIn } from "../utils/motion";

// Components
import { TitleText, TypingText } from "../components";

// Assets
import { Map, People01, People02, People03 } from "../assets";

const World = () => (
  <section id="world" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <img src={Map} alt="map" className="h-full w-full object-cover" />

        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src={People01} alt="people" className="h-full w-full" />
        </div>

        <div className="absolute top-10 left-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src={People02} alt="people" className="h-full w-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src={People03} alt="people" className="h-full w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
