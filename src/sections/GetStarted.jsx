"use client";

// Framer motion
import { motion } from "framer-motion";

// Styles
import styles from "../styles";

// Utils
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

// Components
import { StartSteps, TitleText, TypingText } from "../components";

// Constants
import { startingFeatures } from "../constants";

// Assets
import { GetStartedImg } from "../assets";

const GetStarted = () => (
  <section id="get-started" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={GetStartedImg}
          alt="get-started"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
