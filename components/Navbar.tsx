"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";
import Image from "next/image";

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Playground", href: "#skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= 150 && rect.bottom >= 100;
          if (isVisible) {
            currentSection = section;
          }
        }
      });

      setActiveItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hamburger menu icon paths
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };
  const middleLine = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  // Handle smooth scroll with offset for navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Check if it's a page route (like /contact)
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }

    // Remove # from href to get section ID
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      // Calculate navbar height - navbar wrapper has pt-6 md:pt-8 (24px/32px) + navbar height
      const navbarWrapper = document.querySelector('div[class*="fixed top-0"]');
      let offset = 140; // Default offset for nice spacing
      
      if (navbarWrapper) {
        const navbarRect = navbarWrapper.getBoundingClientRect();
        if (navbarRect) {
          // Total height = navbar bottom position + extra spacing for visual breathing room
          // This ensures section headings appear nicely below the navbar
          offset = navbarRect.bottom + 60; // 60px spacing after navbar
        }
      }

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4 md:pt-8">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-7xl"
      >
        {/* Main Navigation Bar */}
        <motion.div
          className="relative rounded-2xl px-4 md:px-6 py-4 flex items-center justify-between glass-card border border-border"
          animate={{
            boxShadow: scrolled
              ? "0 8px 32px rgba(0, 255, 136, 0.1)"
              : "0 4px 20px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <motion.a
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="https://i.postimg.cc/Hs6q84GY/Chat-GPT-Image-Nov-3-2025-12-05-20-AM.png"
                alt="Hamse Mohamed Ismail Logo"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = activeItem === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-sm font-medium transition-colors text-secondary hover:text-cyber-green group cursor-pointer"
                  onMouseEnter={() => setActiveItem(item.href.substring(1))}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-cyber-green"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Right Side Actions - Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg glass-card border border-border flex items-center justify-center text-secondary hover:border-cyber-green hover:text-cyber-green transition-all"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.15, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM12 18.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01-.75.75H2.25a.75.75 0 010-1.5H4.5a.75.75 0 01.75.75zM12 5.25a.75.75 0 01.75-.75V2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-secondary hover:text-cyber-green transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <motion.line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                animate={isOpen ? topLine.open : topLine.closed}
                transition={{ duration: 0.3 }}
              />
              <motion.line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                animate={isOpen ? middleLine.open : middleLine.closed}
                transition={{ duration: 0.3 }}
              />
              <motion.line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                animate={isOpen ? bottomLine.open : bottomLine.closed}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-20 left-4 right-4 z-50 rounded-2xl glass-card border border-border"
              >
                <div className="p-6 flex flex-col gap-4">
                  {navItems.map((item, index) => {
                    const isActive = activeItem === item.href.substring(1);
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href);
                          setIsOpen(false);
                        }}
                        className="relative text-lg font-medium py-3 transition-colors text-secondary hover:text-cyber-green rounded-lg px-4 cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={{ x: 10 }}
                      >
                        <span className="flex items-center gap-3">
                          <motion.span
                            className="w-2 h-2 rounded-full bg-cyber-green"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: isActive ? 1 : 0.5, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          />
                          {item.name}
                        </span>
                      </motion.a>
                    );
                  })}

                  {/* Theme Toggle in Mobile Menu */}
                  <motion.button
                    onClick={toggleTheme}
                    className="mt-2 px-5 py-3 rounded-lg glass-card border border-border font-medium text-sm flex items-center justify-center gap-2 text-secondary hover:border-cyber-green hover:text-cyber-green transition-all"
                    aria-label="Toggle theme"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === "dark" ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM12 18.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01-.75.75H2.25a.75.75 0 010-1.5H4.5a.75.75 0 01.75.75zM12 5.25a.75.75 0 01.75-.75V2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75z" />
                        </svg>
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                        </svg>
                        <span>Dark Mode</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
