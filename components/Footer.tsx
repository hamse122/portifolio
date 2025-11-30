"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import MorphingBlob from "./MorphingBlob";
import Image from "next/image";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", href: "#", icon: "github" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Email", href: "mailto:ihyaet@gmail.com", icon: "mail" },
];

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <footer className={`relative ${isContactPage ? 'pt-8 md:pt-12' : 'pt-32 md:pt-40'} pb-8 overflow-hidden bg-dark`}>
      {/* Morphing 3D Blob Background */}
      <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-1 mb-1">
                <div className="relative w-10 h-10 md:w-17 md:h-17 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://i.postimg.cc/Hs6q84GY/Chat-GPT-Image-Nov-3-2025-12-05-20-AM.png"
                    alt=" "
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  Hamse Mohamed Ismail
                </h3>
              </div>
              <p className="text-secondary mb-6 leading-relaxed font-light">
                Full-Stack Software Engineer building scalable digital solutions
                for modern businesses.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg glass-card border border-border flex items-center justify-center text-secondary hover:border-cyber-green hover:text-cyber-green transition-all"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon === "github" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social.icon === "mail" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-inverse mb-6">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      
                      // Handle page routes (like /contact, /pricing)
                      if (link.href.startsWith('/')) {
                        window.location.href = link.href;
                        return;
                      }
                      
                      const sectionId = link.href.substring(1);
                      
                      // If we're on a different page, navigate to home with hash
                      if (pathname !== '/') {
                        window.location.href = `/${link.href}`;
                        return;
                      }

                      // We're on the home page, scroll to section
                      const element = document.getElementById(sectionId);
                      if (element) {
                        const navbarWrapper = document.querySelector('div[class*="fixed top-0"]');
                        let offset = 100;
                        
                        if (navbarWrapper) {
                          const navbarRect = navbarWrapper.getBoundingClientRect();
                          if (navbarRect) {
                            offset = navbarRect.bottom + 40;
                          }
                        }

                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    className="text-secondary hover:text-cyber-green transition-colors relative group w-fit cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-cyber-green"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-inverse mb-6">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="mailto:ihyaet@gmail.com"
                  className="block text-secondary hover:text-cyber-green transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <span className="flex items-center gap-2">
                    <span>ihyaet@gmail.com</span>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.a>
                <p className="text-secondary text-sm font-light leading-relaxed">
                  Available for freelance projects and full-time opportunities.
                  Let&apos;s discuss how we can work together.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyber-green/40 to-transparent mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-secondary text-sm"
            >
              <p className="flex items-center justify-center gap-2 flex-wrap">
                © {new Date().getFullYear()} — Built with{" "}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="w-4 h-4 text-cyber-green fill-cyber-green" />
                </motion.span>{" "}
                by{" "}
                <span className="text-cyber-green font-semibold">
                  Hamse Mohamed Ismail
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent pointer-events-none" />
    </footer>
  );
}
