import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function GetStartedCard() {
  return (
    <div
      className="container relative mt-28 mb-28 mx-auto overflow-hidden rounded-lg h-[270px] bg-[linear-gradient(114.07deg,_rgba(0,0,0,0)_26.45%,_rgb(11,136,144)_89.4%)] text-white p-10 shadow-xl border border-[rgb(11,136,144)]"
      data-aos="zoom-in-down"
    >
      <div className="flex items-start justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let Me Help You
            <span className="text-yellow-300 font-extrabold">
              {" "}
              Get Started.
            </span>
          </h2>
          <p className="text-gray-200 text-base">
            I’m here to guide you through the setup process and ensure you get
            off to a smooth start.
          </p>

          <a
            href="/contact"
            className="bg-[rgb(11,136,144)] h-9 w-20 rounded-[8px] flex items-center justify-center hover:bg-transparent border border-[rgb(11,136,144)]"
          >
            {" "}
            <ArrowRight className="h-8 w-14" />
          </a>
        </div>

        <div className="relative w-full md:w-1/3 h-64">
          <Image
            src="/assets/up.png"
            alt="Motivation"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
