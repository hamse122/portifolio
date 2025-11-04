"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Achievements from "@/components/Achievements";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Achievements />
        <CTA />
        <Footer />
        <BackToTop />
      </main>
    </ThemeProvider>
  );
}

