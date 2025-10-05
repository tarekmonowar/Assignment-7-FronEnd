"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AuroraText from "@/components/ui/AuroraText";
import { Globe } from "@/components/ui/globe";

export default function GrowAnimation() {
  const [isClient, setIsClient] = useState(true); // Set it to true initially for immediate visibility

  // Stop animations when leaving the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsClient(false); // Stop animations on page unload
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Faster animation durations
  const containerVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3, // Faster animation
        ease: [0.16, 1, 0.3, 1],
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Faster animation
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      background: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(16px)",
      background: "rgba(255, 255, 255, 0.05)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }, // Faster card transition
    },
  };

  return (
    <div className="relative w-[95%] md:w-[98%] lg:w-[95%] rounded-lg overflow-hidden mx-auto h-full">
      {/* Card background with its own animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={isClient ? "visible" : "hidden"}
        variants={cardVariants}
      />

      {/* Border overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full border border-white/10"
        style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
        animate={{ opacity: isClient ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col h-full w-full p-5 md:p-6"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-row h-full w-full">
          {/* Left section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-2 gap-6 h-full z-10">
            {/* 40+ text with user avatars */}
            <motion.div
              className="flex items-center justify-start gap-4"
              variants={itemVariants}
            >
              <AuroraText className="text-6xl font-bold">24+</AuroraText>
              <div className="flex -space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden z-30">
                  <Image
                    src="/assets/satisfyC/user1.png"
                    alt="User 1"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="56"
                  />
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden z-20">
                  <Image
                    src="/assets/satisfyC/user2.png"
                    alt="User 2"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="56"
                  />
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden z-10">
                  <Image
                    src="/assets/satisfyC/user3.png"
                    alt="User 3"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="56"
                  />
                </div>
              </div>
            </motion.div>

            {/* Testimonial Title */}
            <motion.h2
              className="text-base md:text-lg lg:text-xl mt-6 font-medium text-white leading-tight"
              variants={itemVariants}
            >
              <AuroraText
                colors={["#8F87F1", "#9B3BFF", "#3DFFF3", "#7EFF3D", "#1f2937"]}
              >
                Satisfied Clients <br /> around the world
              </AuroraText>
            </motion.h2>

            {/* Star Rating */}
            <motion.div className="flex" variants={itemVariants}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-8 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </motion.div>
          </div>

          {/* Right section with Globe component */}
          <div className="w-full md:w-1/2 flex items-center justify-end overflow-vissible">
            <div className="relative h-[120px] w-[100px] md:h-[150px] md:w-[180px] -mr-10">
              <Globe className="w-full h-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
