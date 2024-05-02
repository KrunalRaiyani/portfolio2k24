import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/images/heroBg.png')] bg-no-repeat bg-cover h-screen">
      <HeroSection />
      <AboutMe />
      <Services />
    </div>
  );
}
