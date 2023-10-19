"use client";

// Framer motion
import { motion } from "framer-motion";

// Styles
import styles from "../styles";

// Utils
import { navVariants } from "../utils/motion";

// Assets
import { Menu, Search } from "../assets";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src={Search}
        alt="search"
        className="h-[24px] w-[24px] object-contain"
      />
      <h2 className="text-[24px] font-extrabold leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <img src={Menu} alt="menu" className="h-[24px] w-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
