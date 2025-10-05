"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
const stats = [
  {
    num: 4,
    text: "+ Years of Experience",
  },
  {
    num: 26,
    text: "+ Project completed",
  },
  {
    num: 18,
    text: "+ Technologies mastered",
  },
  {
    num: 500,
    text: "+ Github Code Commit",
  },
];

export default function Stats() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCount(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-4 pt-4 pb-10 xl:pt-0 xl:pb-0">
      <div className="container max-w-7xl mx-auto px-7">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="group relative flex-1 py-8 pl-6 flex gap-4 items-center justify-center  bg-white/[0.02] rounded-lg border border-white/[0.05] backdrop-blur-xl overflow-hidden transition-all duration-500"
                key={index}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                </div>

                {/* Content */}
                {startCount && (
                  <CountUp
                    end={item.num}
                    duration={5}
                    className="text-4xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white  via-[#92b0df] to-[#4285F4]"
                  />
                )}

                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/100`}
                >
                  {item.text}
                </p>

                {/* Decorative corner gradient */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#4285F4]/20 to-transparent rounded-full blur-lg transform group-hover:scale-150 transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
