import AboutMe from "@/components/sections/AboutMe";
import HeroSection from "@/components/sections/HeroSection";
import Project from "@/components/sections/Project";
import Services from "@/components/sections/Services";
import Skill from "@/components/sections/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/images/heroBg.png')] bg-no-repeat bg-cover h-screen">
      <HeroSection />
      <AboutMe />
      <Services />
      <Project />
      <Skill />
    </div>
  );
}
