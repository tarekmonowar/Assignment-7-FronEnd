"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "./faq.module.css";

const initialFaqs = [
  {
    id: 1,
    question: "What technologies do you use for full-stack development?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express, React, Node.js) with TypeScript, Tailwind CSS, and modern authentication solutions like JWT and OAuth.",
  },
  {
    id: 2,
    question: "How do you handle database management in your projects?",
    answer:
      "I use MongoDB for flexible NoSQL data storage with Mongoose for schema validation, and implement both relational and document-based architectures as needed.",
  },
  {
    id: 3,
    question: "What's your approach to frontend performance optimization?",
    answer:
      "I optimize React apps with code splitting, lazy loading, memoization, and efficient state management using Context API or Redux Toolkit for top performance.",
  },
  {
    id: 4,
    question: "How do you ensure secure authentication in applications?",
    answer:
      "I implement JWT with HTTP-only cookies, password hashing with bcrypt, CSRF protection, and OAuth for social logins to ensure maximum security.",
  },
  {
    id: 5,
    question: "What deployment options do you recommend for MERN apps?",
    answer:
      "For full-stack apps, I recommend Vercel for frontend, Railway for backend, and MongoDB Atlas for database, ensuring cost-effective scalability.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // adjust delay between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const FaqCard = ({
  faq,
  isExpanded,
  onToggle,
}: {
  faq: (typeof initialFaqs)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div layout="position" className="w-full">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        layout="position"
        transition={{
          layout: { duration: 0.2 },
        }}
        className="w-full"
      >
        <button
          onClick={onToggle}
          className="w-full text-left"
          aria-expanded={isExpanded}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <div
            className={`
            overflow-hidden font-secondary
            ${styles.myModuleWrapper}
          `}
          >
            <div
              className={`${styles.service} group relative transition-all duration-300 rounded-lg shadow-lg`}
            >
              {/* Enhanced Shimmer Effects for expanded card */}
              {isExpanded && (
                <>
                  <div className="absolute inset-0 ">
                    <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
                  </div>
                  <div className="absolute inset-0 ">
                    <div className="absolute inset-0 translate-x-[-100%] animate-[fastShimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#1a73e8]/15 to-transparent" />
                  </div>
                  <div className="absolute inset-0  bg-[#4285F4]/3 animate-pulse" />
                </>
              )}

              <div className="p-4 sm:p-5 relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-base font-semibold transition-colors duration-200 ${
                      isExpanded ? "text-[#ec6850]" : " text-white/70"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-colors duration-200
                    ${isExpanded ? "text-[#fd4646]" : "text-white/70"}
                  `}
                    />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 sm:pt-4 text-sm text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default function FaqSection() {
  const [expandedId, setExpandedId] = useState<number>(1);
  const [displayedFaqs] = useState(initialFaqs);

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-down">
          <h2 className="text-4xl lg:text-5xl font-bold text-white flex flex-col items-center gap-3">
            <span>Let&apos;s Answer Some</span>
            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#ffa113] to-[#28e0d1] mt-1">
              Frequent answer questions(FAQ)
            </span>
          </h2>
        </div>

        <div
          className="relative"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* FAQ Cards Container */}
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-3xl mx-auto space-y-4 sm:space-y-6 relative"
            >
              {displayedFaqs.map((faq) => (
                <FaqCard
                  key={faq.id}
                  faq={faq}
                  isExpanded={expandedId === faq.id}
                  onToggle={() =>
                    setExpandedId(faq.id === expandedId ? 0 : faq.id)
                  }
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
