"use client";

import React from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: string;
}

export default function AuroraText({
  children,
  className = "",
  colors,
  duration = "8s",
}: AuroraTextProps) {
  const defaultColors = [
    "#1f2937",
    "rgba(0, 255, 153, 0.7)",
    "#13bbff",
    "#3b82f6",
    "#1f2937",
  ];

  const gradientColors = colors?.length ? colors : defaultColors;
  const gradient = `linear-gradient(90deg, ${gradientColors.join(", ")})`;

  return (
    <div className={`relative inline-block ${className}`}>
      <span
        style={{
          background: gradient,
          backgroundSize: "300% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          animation: `aurora ${duration} ease-in-out infinite`,
          display: "inline-block",
        }}
      >
        {children}
      </span>

      <style>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
