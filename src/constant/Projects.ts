import { StaticImageData } from "next/image";

import ecommerce from "@/assets/images/ecommerce/ecommerce.png";
import ridemanagment from "@/assets/images/ride/tmride.png";
import adminDashboard from "@/assets/images/Admin-dashboard1.png";

interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  cover: StaticImageData | string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "tm-ecommerce",
    title: "TM-ECommerce",
    summary:
      "A  modern industry-standard e-commerce platform featuring smart product browsing, cart management, user authentication, Orders, secure checkout and payments, and an Admin Dashboard with real-time analytics and statistics.",
    cover: ecommerce,
    tags: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "https://github.com/tarekmonowar/E-Commerce-FrontEnd",
    liveLink: "https://tm-ecommerce.vercel.app",
  },
  {
    slug: "tm-ridemanagement",
    title: "Ride-Management",
    summary:
      "A modern ride booking management platform where riders can book trips with real-time location and map tracking, drivers can accept and manage rides efficiently, and admins can monitor all operations through a comprehensive dashboard with live analytics and insights.",
    cover: ridemanagment,
    tags: [
      "React",
      "Tailwind CSS",
      "Shadcn",
      "TypeScript",
      "Node",
      "Express",
      "MongoDB",
    ],
    githubLink: "https://github.com/tarekmonowar/Ride-Management-FrontEnd",
    liveLink: "https://tm-ride.vercel.app",
  },
  {
    slug: "tm-admin-dashboard",
    title: "Admin Dashboard",
    summary:
      "A powerful admin dashboard providing advanced analytics, role-based access control, order and user management, and real-time statistics with interactive charts. Designed for scalability and ease of monitoring operations across platforms.",
    cover: adminDashboard,
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "https://github.com/tarekmonowar/Admin-Dashboard",
    liveLink: "https://tmadmindashboard.vercel.app/",
  },
];
