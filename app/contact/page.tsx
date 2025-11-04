"use client";

import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeProvider from "@/components/ThemeProvider";

export default function ContactPage() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

