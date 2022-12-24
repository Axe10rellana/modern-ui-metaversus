'use client';

// Framer motion
import { motion } from 'framer-motion';

// Styles
import styles from '../styles';

// Utils
import { navVariants } from '../utils/motion';

// Assets
import { Menu, Search } from '../assets';

const Navbar = () => (
  <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[50%] inset-0" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src={Search} alt="search" className="w-[24px] h-[24px] object-contain" />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <img src={Menu} alt="menu" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
