"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/icons/hero.svg";
import FloatingObject from "@/Utils/FloatingObject";
import nextjsIcon from "@/assets/icons/nextjs-icon.svg";
import reactIcon from "@/assets/icons/React.svg";
import tailwindIcon from "@/assets/icons/Tailwind CSS.svg";
import tsIcon from "@/assets/icons/TypeScript.svg";
import postGreSQL from "@/assets/icons/postgresql-icon.svg";

const MotionDiv = motion.div;

export default function RightPhotoCard() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ visibility: "visible", opacity: 1, scale: 1 }}
      transition={{ delay: 0.75, duration: 0.5, ease: "easeInOut" }}
      className="pointer-events-none relative -z-10 grid select-none place-items-center "
    >
      <Image
        src={heroImage}
        alt="hero"
        className="max-w-full select-none"
        priority
      />
      <FloatingObject className="left-0 top-1/3">
        <Image src={reactIcon} alt="" />
      </FloatingObject>
      <FloatingObject className="left-1/2 top-10">
        <Image src={postGreSQL} alt="" />
      </FloatingObject>
      <FloatingObject className="bottom-1/4 right-0">
        <Image src={tailwindIcon} alt="" />
      </FloatingObject>
      <FloatingObject className="bottom-[15%] left-20">
        <Image src={nextjsIcon} alt="" />
      </FloatingObject>
      <FloatingObject className="right-10 top-20">
        <Image src={tsIcon} alt="" />
      </FloatingObject>
    </MotionDiv>
  );
}
