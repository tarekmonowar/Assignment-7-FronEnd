import React from "react";
import GrowAnimation from "./GrowAnimation";
import EarthAnimation from "./EarthAnimation";

export default function HeroBottom() {
  return (
    <div className="container max-w-7xl px-4 mt-28" data-aos="zoom-in-up">
      <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6">
        {/* Left Section - Collaboration Banner */}
        <div className="w-full md:w-[50%] h-[300px] sm:h-[320px] md:h-[300px] ">
          <GrowAnimation />
        </div>

        {/* Right Section - Testimonial Banner */}
        <div className="w-full md:w-[50%] h-[300px] sm:h-[320px] md:h-[300px] ">
          <EarthAnimation />
        </div>
      </div>
    </div>
  );
}
