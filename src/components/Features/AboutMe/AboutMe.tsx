"use client";
import { useState } from "react";
import { User } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function AboutMe2() {
  const [activeTab, setActiveTab] = useState("personal");
  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-6 py-10 font-third mt-44">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div className="text-center xl:text-left">
          <h1 className="text-accent font-bold text-5xl mb-6 xl:mb-4">
            About Me.
          </h1>
          <p className="mb-8 text-xl font-semibold font-primary">
            Full-Stack Web Developer{" "}
            <span className="text-accent font-bold text-2xl">|</span> Certified
            Expert <span className="text-accent font-bold text-2xl">|</span>
          </p>
          <p className="text-white/60 text-justify text-base">
            Hi, I&apos;m{" "}
            <span className="text-lg text-white/80">Tarek Monowar</span>, a BSc
            graduate (2024). I specialize in transforming business visions into
            scalable and high-performance websites. As a certified full-stack
            developer from freeCodeCamp and Programming Hero
            {/* , I have advanced expertise in the MERN stack and
            TypeScript. I excel in architecting scalable solutions, building
            RESTful APIs, and creating modern, responsive interfaces */}
            , I am dedicated to delivering professional websites tailored to
            your specific needs using the latest frameworks.
          </p>

          <RainbowButton
            href="https://www.freecodecamp.org/certification/tarekmonowar/responsive-web-design"
            className="mt-8 px-[22px] py-[7px]  rounded-[8px] text-[15px] font-semibold transition-all duration-500 ease-in-out hover:bg-accent hover:text-white hover:shadow-[0_0_20px_#13bbff]"
          >
            Verify Cert.
          </RainbowButton>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden w-full max-w-md h-96 bg-gray-800">
            <Image
              src="/assets/tm111.png"
              alt="Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={() => setActiveTab("personal")}
          className={`flex items-center justify-center gap-2 p-4 rounded-md transition-all ${
            activeTab === "personal"
              ? "border  border-accent text-accent"
              : "border border-white/10 hover:border-white/30"
          }`}
        >
          <User className="text-blue-400" size={34} />
          <span className=" font-bold text-xl ml-2">Personal Background</span>
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center justify-center gap-2 p-4 rounded-md transition-all ${
            activeTab === "education"
              ? "border  border-accent text-accent"
              : "border border-white/10 hover:border-white/30"
          }`}
        >
          <GraduationCap className="text-blue-400" size={34} />
          <span className="font-bold text-xl ml-2">
            Education & Certificate
          </span>
        </button>

        <button
          onClick={() => setActiveTab("professional")}
          className={`flex items-center justify-center gap-2 p-4 rounded-md transition-all ${
            activeTab === "professional"
              ? "border  border-accent text-accent"
              : "border border-white/10 hover:border-white/30"
          }`}
        >
          <Briefcase className="text-blue-400" size={34} />
          <span className="font-bold text-xl ml-2">
            Professional Experience
          </span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="  border  border-accent  rounded-md p-6 min-h-[300px] animate-fade-in group relative transition-all duration-200 overflow-hidden">
        {/* shimmer animations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
        </div>

        {activeTab === "personal" && (
          <div>
            <h2 className="text-2xl text-accent font-bold mb-4">
              Personal Background
            </h2>
            <p className="text-gray-300">
              I’m a results-driven software developer who transforms complex
              challenges into reliable,{" "}
              <span className="text-accent">user-focused solutions</span>. My
              journey began with small coding projects and has grown into
              building full-scale applications that create meaningful digital
              experiences. I believe that technology has the power to transform
              lives and improve society. Therefore, I strive to create
              meaningful digital experiences that not only meet users needs but
              also inspire them. In my free time, I enjoy exploring new
              programming languages and frameworks, participating in hackathons,
              and engaging with the tech community. This passion for continuous
              learning keeps me updated with the latest industry trends and best
              practices. Ultimately, I am dedicated to using my skills and
              knowledge to make a difference in the tech landscape.
            </p>
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <h2 className="text-2xl text-accent font-bold mb-4">
              Educational Background
            </h2>
            <p className="text-gray-300">
              I hold a{" "}
              <span className="text-accent/80">Bachelor of Science</span> degree
              and am currently pursuing my Master’s in Mathematics. Alongside my
              academic journey, I have successfully completed the
              <span className="text-accent/80"> Programming Hero</span> Level-2
              course, where I gained hands-on experience in full-stack
              development under the guidance of expert mentors and earned an
              industry-recognized certification. In addition, I hold a
              Full-Stack Web Developer certificate from freeCodeCamp, which
              further strengthened my skills in building scalable and modern web
              applications. This blend of academic knowledge and practical
              training has equipped me with a strong foundation to solve complex
              problems and deliver high-quality digital solutions.
            </p>
          </div>
        )}

        {activeTab === "professional" && (
          <div>
            <h2 className="text-2xl text-accent font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-300">
              I have built and deployed industry-standard web applications,
              including full-featured e-commerce platforms, ride-booking
              systems, tour management solutions, and social networking
              applications. My hands-on experience comes not only from
              real-world projects but also from structured programs such as{" "}
              <span className="text-accent/80">freeCodeCamp</span> and{" "}
              <span className="text-accent/80">Programming Hero</span>, where I
              successfully completed multiple full-stack projects under
              professional guidance. These experiences have strengthened my
              ability to design scalable architectures, implement user-friendly
              interfaces, and develop secure, high-performance back-end systems.
              I take pride in delivering clean, maintainable code and creating
              applications that provide real value to users. As I continue to
              grow, my focus remains on building impactful digital solutions
              while embracing new technologies and best practices.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
