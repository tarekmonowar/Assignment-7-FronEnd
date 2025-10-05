"use client";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "./timeline";
import styles from "./skilled.module.css";

import { motion } from "framer-motion";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGithub,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { GrGraphQl } from "react-icons/gr";
import { FaHeadSideVirus } from "react-icons/fa6";

export default function Skills() {
  const TeachStack = {
    FrontEnd: [
      {
        icon: SiHtml5,
        name: "HTML5",
        level: 100,
        color: "text-orange-500 group-hover:text-orange-400",
        gradient: "from-orange-500/80 to-orange-500/20",
      },
      {
        icon: SiCss3,
        name: "CSS3",
        level: 90,
        color: "text-blue-500 group-hover:text-blue-400",
        gradient: "from-blue-500/80 to-blue-500/20",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
        level: 90,
        color: "text-yellow-400 group-hover:text-yellow-300",
        gradient: "from-yellow-400/80 to-yellow-400/20",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        level: 90,
        color: "text-blue-500 group-hover:text-blue-400",
        gradient: "from-blue-500/80 to-blue-500/20",
      },

      {
        icon: SiReact,
        name: "React",
        level: 90,
        color: "text-[#00D8FF] group-hover:text-[#00D8FF]",
        gradient: "from-[#00D8FF]/80 to-[#00D8FF]/20",
      },
      {
        icon: SiRedux,
        name: "Redux",
        level: 90,
        color: "text-purple-500 group-hover:text-purple-400",
        gradient: "from-purple-500/80 to-purple-500/20",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
        level: 100,
        color: "text-white group-hover:text-white",
        gradient: "from-white/80 to-white/20",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind",
        level: 90,
        color: "text-red-400 group-hover:text-red-300",
        gradient: "from-red-500/80 to-red-500/20",
      },
      {
        icon: TbBrandFramerMotion,
        name: "F Motion",
        level: 80,
        color: "text-yellow-400 group-hover:text-yellow-300",
        gradient: "from-yellow-500/80 to-yellow-500/20",
      },
    ],

    BackEnd: [
      {
        icon: SiNodedotjs,
        name: "Node.js",
        level: 88,
        color: "text-green-500 group-hover:text-green-400",
        gradient: "from-green-500/80 to-green-500/20",
      },
      {
        icon: SiExpress,
        name: "Express",
        level: 96,
        color: "text-orange-600 group-hover:text-orange-500",
        gradient: "from-orange-500/80 to-orange-500/20",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        level: 90,
        color: "text-blue-500 group-hover:text-blue-400",
        gradient: "from-blue-500/80 to-blue-500/20",
      },

      {
        icon: SiMongodb,
        name: "MongoDB",
        level: 85,
        color: "text-green-400 group-hover:text-green-300",
        gradient: "from-green-400/80 to-green-400/20",
      },

      {
        icon: SiPostgresql,
        name: "PostgresSQL",
        level: 85,
        color: "text-blue-300 group-hover:text-blue-200",
        gradient: "from-blue-400/80 to-blue-400/20",
      },
      {
        icon: VscServerProcess,
        name: "Rest API",
        color: "text-purple-400 group-hover:text-purple-300",
        level: 95,
        gradient: "from-purple-400/80 to-purple-400/20",
      },
      {
        icon: GrGraphQl,
        name: "GraphQL",
        level: 85,
        color: "text-[#ff9900] ",
        gradient: "from-[#ff9900]/80 to-[#ff9900]/20",
      },

      {
        icon: SiPrisma,
        name: "Prisma",
        level: 85,
        color: "text-white group-hover:text-white",
        gradient: "from-white/80 to-white/20",
      },
      {
        icon: SiFirebase,
        name: "Firebase",
        level: 90,
        color: "text-[#DD2C00] ",
        gradient: "from-[#DD2C00]/80 to-[#DD2C00]/20",
      },
    ],
    OthersTechnology: [
      {
        icon: FaAws,
        name: "AWS",
        level: 85,
        color: "text-[#ff9900] ",
        gradient: "from-[#ff9900]/80 to-[#ff9900]/20",
      },
      {
        icon: SiVercel,
        name: "Vercel",
        level: 100,
        color: "text-white group-hover:text-white",
        gradient: "from-white/80 to-white/20",
      },
      {
        icon: SiGithub,
        name: "GitHub",
        level: 95,
        color: "text-purple-400 group-hover:text-purple-300",
        gradient: "from-purple-400/80 to-purple-400/20",
      },
      {
        icon: SiDocker,
        name: "Docker",
        level: 85,
        color: "text-[#2396ED] ",
        gradient: "from-[#2396ED]/80 to-[#2396ED]/20",
      },
      {
        icon: SiGithubactions,
        name: "CI/CD",
        color: "text-[#FF3301]",
        level: 85,
        gradient: "from-[#FF3301]/80 to-[#FF3301]/20",
      },

      {
        icon: SiStripe,
        name: "Stripe",
        color: "text-[#635BFF]",
        level: 100,
        gradient: "from-[#635BFF]/80 to-[#635BFF]/20",
      },

      {
        icon: FaHeadSideVirus,
        name: "Actively learning DevOps...",
        level: 25,
        color: "text-green-400 group-hover:text-green-300",
      },
    ],
  };

  const data = [
    {
      title: "FrontEnd -",
      content: (
        <div>
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-brand before:rounded-xl before:ring-4 before:ring-white/50 last:before:h-3">
              <div className="absolute left-1.5 top-5 w-[1px] h-[calc(100%-24px)] bg-white/20"></div>

              <div>
                <Badge className="inline-flex items-center rounded-md px-4 py-1 text-sm font-medium bg-black text-[#ff914d] mb-4">
                  FrontEnd Technologies
                </Badge>

                <div className={styles.myModuleWrapper} data-aos="fade-left">
                  <div
                    className={`${styles.service} group relative transition-all duration-300 rounded-lg shadow-lg overflow-hidden`}
                  >
                    {" "}
                    <motion.div
                      className="flex flex-wrap gap-8 justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {TeachStack.FrontEnd.map((tech, index) => (
                        <motion.div
                          key={index}
                          className="group"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-4">
                            <tech.icon
                              className={`w-8 h-8 ${tech.color} transition-colors duration-300`}
                            />
                            <div>
                              <div className="text-base lg:text-lg font-semibold text-white/80">
                                {tech.name}
                              </div>
                              <div className="h-1 w-24 bg-white/5 rounded-full mt-1.5 overflow-hidden">
                                <motion.div
                                  className={`h-full rounded-full bg-gradient-to-r ${tech.gradient}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${tech.level}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div>
                      <div className="absolute inset-0 ">
                        <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
                      </div>
                      <div className="absolute inset-0 ">
                        <div className="absolute inset-0 translate-x-[-100%] animate-[fastShimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#1a73e8]/15 to-transparent" />
                      </div>
                      <div className="absolute inset-0  bg-[#4285F4]/3 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "BackEnd :- ",
      content: (
        <div>
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-brand before:rounded-xl before:ring-4 before:ring-white/50 last:before:h-3">
              <div className="absolute left-1.5 top-5 w-[1px] h-[calc(100%-24px)] bg-white/20"></div>

              <div>
                <Badge className="inline-flex items-center rounded-md px-4 py-1 text-sm font-medium bg-black text-[#ff914d] mb-4">
                  BackEnd Technologies
                </Badge>

                <div className={styles.myModuleWrapper} data-aos="fade-left">
                  <div
                    className={`${styles.service} group relative transition-all duration-300 rounded-lg shadow-lg overflow-hidden`}
                  >
                    {" "}
                    <motion.div
                      className="flex flex-wrap gap-8 justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {TeachStack.BackEnd.map((tech, index) => (
                        <motion.div
                          key={index}
                          className="group"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-4">
                            <tech.icon
                              className={`w-8 h-8 ${tech.color} transition-colors duration-300`}
                            />
                            <div>
                              <div className="text-base lg:text-lg font-semibold text-white/80">
                                {tech.name}
                              </div>
                              <div className="h-1 w-24 bg-white/5 rounded-full mt-1.5 overflow-hidden">
                                <motion.div
                                  className={`h-full rounded-full bg-gradient-to-r ${tech.gradient}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${tech.level}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div>
                      <div className="absolute inset-0 ">
                        <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
                      </div>
                      <div className="absolute inset-0 ">
                        <div className="absolute inset-0 translate-x-[-100%] animate-[fastShimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#1a73e8]/15 to-transparent" />
                      </div>
                      <div className="absolute inset-0  bg-[#4285F4]/3 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cloud & Tools :-",
      content: (
        <div>
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-brand before:rounded-xl before:ring-4 before:ring-white/50 last:before:h-3">
              <div className="absolute left-1.5 top-5 w-[1px] h-[calc(100%-24px)] bg-white/20"></div>

              <div>
                <Badge className="inline-flex items-center rounded-md px-4 py-1 text-sm font-medium bg-black text-[#ff914d] mb-4">
                  Deployment & Services
                </Badge>

                <div className={styles.myModuleWrapper} data-aos="fade-left">
                  <div
                    className={`${styles.service} group relative transition-all duration-300 rounded-lg shadow-lg overflow-hidden`}
                  >
                    {" "}
                    <motion.div
                      className="flex flex-wrap gap-8 justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {TeachStack.OthersTechnology.map((tech, index) => (
                        <motion.div
                          key={index}
                          className="group"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-4">
                            <tech.icon
                              className={`w-8 h-8 ${tech.color} transition-colors duration-300`}
                            />
                            <div>
                              <div className="text-base lg:text-lg font-semibold text-white/80">
                                {tech.name}
                              </div>
                              <div className="h-1 w-24 bg-white/5 rounded-full mt-1.5 overflow-hidden">
                                <motion.div
                                  className={`h-full rounded-full bg-gradient-to-r ${tech.gradient}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${tech.level}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div>
                      <div className="absolute inset-0 ">
                        <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
                      </div>
                      <div className="absolute inset-0 ">
                        <div className="absolute inset-0 translate-x-[-100%] animate-[fastShimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#1a73e8]/15 to-transparent" />
                      </div>
                      <div className="absolute inset-0  bg-[#4285F4]/3 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div
        className="relative w-full overflow-clip px-4 lg:px-0"
        id="experience"
      >
        <Timeline data={data} />
      </div>
    </div>
  );
}
