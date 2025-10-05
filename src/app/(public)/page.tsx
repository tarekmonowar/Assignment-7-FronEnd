//components
import HeroSection from "@/components/Features/Hero/HeroSection";
import dynamic from "next/dynamic";
// Lazy load non-critical sections
const Stats = dynamic(() => import("@/Utils/Stats"));
const GrowEarth = dynamic(
  () => import("@/components/Features/ClientSatisfied/GrowEarth"),
);
const AboutMe = dynamic(() => import("@/components/Features/AboutMe/AboutMe"));
const Skills = dynamic(() => import("@/components/Features/Skills/Skills"));
const FeaturesProject = dynamic(
  () => import("@/components/Features/Project/FeaturesProjects"),
);
const Services = dynamic(
  () => import("@/components/Features/Services/Services"),
);
const GetStartedCard = dynamic(
  () => import("@/components/Features/GetStartedCard/GetStartedCard"),
);
const FaqSection = dynamic(() => import("@/components/Features/FAQ/FAQ"));
const Contact = dynamic(() => import("@/components/Features/Contact/Contact"));
const Footer = dynamic(() => import("@/components/Features/Footer/Footer"));
const Blogs = dynamic(() => import("@/components/Features/Blogs/BlogPost"));

export default function Home() {
  return (
    <main className="">
      <section className="h-full">
        {/* first landing */}
        <HeroSection />

        {/* stats section */}
        <Stats />

        {/* client satisfied section */}
        <GrowEarth />

        {/* About section 2*/}
        <AboutMe />

        {/* skills section */}
        <Skills />

        {/* FeaturesProject section */}
        <FeaturesProject />

        {/* Services section */}
        <Services />

        {/* Up card section */}
        <GetStartedCard />

        {/* Frequent ask questions section*/}
        <FaqSection />

        {/* contact section */}
        <Contact />
        {/* Blog sections */}
        <Blogs />

        {/* footer section */}
        <Footer />
      </section>
    </main>
  );
}
