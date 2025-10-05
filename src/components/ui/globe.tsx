"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 400,
  height: 400,
  onRender: () => {},
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.5,
  dark: 0.2,
  diffuse: 0.8,
  mapSamples: 12000,
  mapBrightness: 1.5,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.05 }, // London
    { location: [48.8566, 2.3522], size: 0.05 }, // Paris
    { location: [55.7558, 37.6173], size: 0.05 }, // Moscow
    { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles
    { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
    { location: [40.73061, -73.935242], size: 0.05 }, // New York
    { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
    { location: [52.52, 13.405], size: 0.05 }, // Berlin
    { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo
    { location: [33.4484, -112.074], size: 0.05 }, // Phoenix
    { location: [55.6761, 12.5683], size: 0.05 }, // Copenhagen
    { location: [37.9838, 23.7275], size: 0.05 }, // Athens
    { location: [59.3293, 18.0686], size: 0.05 }, // Stockholm
    { location: [41.8781, -87.6298], size: 0.05 }, // Chicago
    { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles (duplicate, to add density)
    { location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires
    { location: [22.3964, 114.1095], size: 0.05 }, // Hong Kong
    { location: [48.8566, 2.3522], size: 0.05 }, // Paris
    { location: [60.1699, 24.9384], size: 0.05 }, // Helsinki
    { location: [19.4326, -99.1332], size: 0.05 }, // Mexico City
    { location: [37.5665, 126.978], size: 0.05 }, // Seoul
    { location: [55.9447, -3.1883], size: 0.05 }, // Edinburgh
    { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
    { location: [43.6532, -79.3832], size: 0.05 }, // Toronto
    { location: [39.7392, -104.9903], size: 0.05 }, // Denver
    { location: [39.9612, -82.9988], size: 0.05 }, // Columbus
    { location: [45.4215, -75.6972], size: 0.05 }, // Ottawa
    { location: [47.6062, -122.3321], size: 0.05 }, // Seattle
    { location: [14.5995, 120.9842], size: 0.03 }, // Philippines (sea area)
    { location: [19.076, 72.8777], size: 0.1 }, // India
    { location: [23.8103, 90.4125], size: 0.05 }, // Bangladesh
    { location: [30.0444, 31.2357], size: 0.07 }, // Egypt (Mediterranean)
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
    { location: [-23.5505, -46.6333], size: 0.1 }, // Brazil
    { location: [19.4326, -99.1332], size: 0.1 }, // Mexico
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [34.6937, 135.5022], size: 0.05 }, // Japan
    { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul
    // Sea/Gap/Polar areas
    { location: [0, 0], size: 0.04 }, // Equator and Prime Meridian intersection
    { location: [90, 0], size: 0.03 }, // North Pole
    { location: [-90, 0], size: 0.03 }, // South Pole
    { location: [0, -180], size: 0.04 }, // International Date Line, sea
    { location: [0, 180], size: 0.04 }, // International Date Line, sea
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = config.phi || 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.003;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // Set opacity to 1 immediately to make it visible faster
    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center overflow-visible",
        className,
      )}
    >
      <div className="w-full h-full flex items-center justify-center">
        <canvas
          className={cn(
            "w-[300%] h-[300%] max-w-none opacity-0 transition-opacity duration-300 -translate-x-[25%] translate-y-[10%]",
          )}
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX;
            updatePointerInteraction(e.clientX);
          }}
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={(e) => updateMovement(e.clientX)}
          onTouchMove={(e) =>
            e.touches[0] && updateMovement(e.touches[0].clientX)
          }
        />
      </div>
    </div>
  );
}
