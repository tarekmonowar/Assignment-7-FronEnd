"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setHeight(rect.height);
  //   }
  // }, [ref]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height + 400],
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="container bg-[#1b1f24] font-sans mt-52 " ref={containerRef}>
      <h2 className="text-lg md:text-6xl mb-4 text-white " data-aos="zoom-in">
        My
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#a9bcff] to-[#4285F4] ">
          Skills
        </span>
      </h2>
      <p
        className="text-neutral-300 text-lg xl:text-[20px] mb-14"
        data-aos="zoom-in"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a7f27c] to-[#ec1ec0] mt-1">
          &quot;A mix of what I know and love doing&quot;
        </span>
      </p>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-5 ml-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between pt-10 md:gap-20">
            <div className="w-[59%]">
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start min-w-[12rem] md:min-w-fit">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-xl bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-xl bg-neutral-800 border border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[30px] top-0  w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#1b1f24] to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[15%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
