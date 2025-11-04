"use client";

import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeProvider from "@/components/ThemeProvider";

export default function PricingPage() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Pricing />
        <Footer />
      </main>
    </ThemeProvider>
  );
}


