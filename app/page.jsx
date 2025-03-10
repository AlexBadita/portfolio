"use client";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Technologies from "@/sections/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
