"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
const Header = dynamic(() => import("@/components/Features/header/Navbar"), {
  ssr: true,
});
const SmoothScroll = dynamic(() => import("@/Utils/SmothScroll"), {
  ssr: false,
});

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <Header />
      {children}
      <ToastContainer position="bottom-right" autoClose={5000} theme="dark" />
      <Analytics />
    </SmoothScroll>
  );
}
