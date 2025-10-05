"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EarthAnimation() {
  return (
    <div
      className="relative w-[95%] md:w-[98%] lg:w-[95%] h-full rounded-lg overflow-hidden mx-auto bg-white/5 border border-white/10 p-10"
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* heading  */}

      {/* <h2 className="-mt-4 mb-6 text-center text-xl border-2 p-2 block mx-auto rounded-lg ">
        Evatuate Your Online Presence now
      </h2> */}

      <h2 className="relative overflow-hidden text-center text-xl border-2 p-2 rounded-lg mx-auto -mt-4 mb-6 ">
        {/* Shimmer Layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 translate-x-[-100%] animate-[fastShimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#1a73e8]/15 to-transparent" />
        </div>

        {/* Text Layer */}
        <span className="relative z-10">Evaluate Your Online Presence now</span>
      </h2>

      {/* video section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex items-center justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-[600px] aspect-[16/9]">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              preload="none"
              playsInline
              className="object-cover w-full h-full rounded-lg"
            >
              <source
                src="https://res.cloudinary.com/dlayfdbyq/video/upload/v1756589196/dashboard_jpb3ki.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
