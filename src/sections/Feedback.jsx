"use client";

// Framer motion
import { motion } from "framer-motion";

// Styles
import styles from "../styles";

// Utils
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

// Assets
import { Planet09, Stamp } from "../assets";

const Feedback = () => (
  <section id="feedback" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="relative flex flex-[0.5] flex-col justify-end rounded-[32px] border-[1px] border-[#6a6a6a] p-4 sm:p-8 lg:max-w-[370px]"
      >
        <div>
          <h4 className="text-[26px] font-bold leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Samantha
          </h4>
          <p className="mt-[8px] text-[12px] font-normal leading-[16px] text-white sm:text-[18px] sm:leading-[22px]">
            Founder | Metaversus
          </p>
        </div>
        <p className="mt-[24px] text-[18px] font-normal leading-[39.6px] text-white sm:text-[24px] sm:leading-[45.6px]">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex flex-1 items-center justify-center"
      >
        <img
          src={Planet09}
          alt="planet-09"
          className="h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="absolute -left-[10%] top-[3%] hidden lg:block"
        >
          <img
            src={Stamp}
            alt="stamp"
            className="h-[155px] w-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
