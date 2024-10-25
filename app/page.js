import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import { AuroraHero } from "@/components/Hero";
import AboutUs from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />  
      <AboutUs />
      <Projects />
      {/* <AuroraHero /> */}
    </div>
  );
}
