// constant/ProjectDetails.ts
import { StaticImageData } from "next/image";
import ecommerce from "@/assets/images/ecommerce/ecommerce.png";
import ridemanagment from "@/assets/images/ride/tmride.png";
import adminDashboard from "@/assets/images/Admin-dashboard1.png";

export interface ProjectItem {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  liveLink: string;
  githubLink: string;
  cover: StaticImageData | string;
  challenges: string[];
  improvements: string[];
}

export const projects = {
  "tm-ecommerce": {
    title: "TM-ECommerce",
    description:
      "A modern industry-standard e-commerce platform featuring smart product browsing, cart management, user authentication, Orders, secure checkout and payments, and an Admin Dashboard with real-time analytics and statistics.",
    features: [
      "Responsive 1/2 image + details layout",
      "Product listing, cart, and order flow",
      "Wishlist and authentication ready",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Shadcn/ui",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    liveLink: "https://tm-ecommerce.vercel.app",
    githubLink: "https://github.com/tarekmonowar/E-Commerce-FrontEnd",
    cover: ecommerce,
    challenges: [
      "Implementing a complex state management solution",
      "Ensuring responsive design across various devices",
      "Integrating payment processing with Stripe",
    ],
    improvements: [
      "Enhancing user experience with smoother animations",
      "Optimizing performance for faster load times",
      "Implementing advanced security measures",
    ],
  },
  "tm-ridemanagement": {
    title: "Ride-Management",
    description:
      "A modern ride booking management platform where riders can book trips with real-time location and map tracking, drivers can accept and manage rides efficiently, and admins can monitor all operations through a comprehensive dashboard with live analytics and insights.",
    features: [
      "Trip lifecycle dashboard",
      "Driver assignment and tracking",
      "Analytics-ready architecture",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Shadcn/ui",
      "Maps",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    liveLink: "https://tm-ride.vercel.app",
    githubLink: "https://github.com/tarekmonowar/Ride-Management-FrontEnd",
    cover: ridemanagment,
    challenges: [
      "Implementing real-time location tracking",
      "Ensuring smooth user experience during ride booking",
      "Integrating maps for accurate route visualization",
    ],
    improvements: [
      "Enhancing driver and rider matching algorithms",
      "Optimizing performance for real-time updates",
      "Implementing advanced security measures",
    ],
  },
  "tm-admin-dashboard": {
    title: "Admin Dashboard",
    description:
      "A powerful admin dashboard application providing real-time analytics, role-based access control, and comprehensive management of users, orders, and operations. Designed with a scalable architecture and optimized for performance and usability.",
    features: [
      "Real-time analytics and statistics",
      "Role-based authentication and access control",
      "User and order management with activity logs",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Recharts",
    ],
    liveLink: "https://tmadmindashboard.vercel.app/",
    githubLink: "https://github.com/tarekmonowar/Admin-Dashboard",
    cover: adminDashboard,
    challenges: [
      "Building scalable role-based access control",
      "Ensuring efficient real-time data synchronization",
      "Designing intuitive and responsive dashboards",
    ],
    improvements: [
      "Adding advanced data visualization widgets",
      "Improving scalability for enterprise-level usage",
      "Integrating notifications and automated reporting",
    ],
  },
} as const;
