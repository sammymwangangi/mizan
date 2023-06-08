import Link from "next/link";
import Image from "next/image";
import {Images} from "@/components/images";
import styles from "@/styles/Home.module.css";
import Confetti from "@/components/Confetti";
import {motion} from "framer-motion";

export default function ThankYou() {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85},
    }),
  }


  return (
    <>
      <motion.h1 initial="hidden"
                 whileInView="visible" variants={textAnimation}>
        Test Page
      </motion.h1>
    </>
  );
}
