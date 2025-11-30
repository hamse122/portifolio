"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TextScramble from "./TextScramble";
import MorphingBlob from "./MorphingBlob";

const techBadges = ["Django", "React", "Next.js", "Flutter", "PostgreSQL", "DevOps"];

export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Morphing 3D Blob Background */}
      <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Name with Text Scramble Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
              <TextScramble
                text="Hamse Mohamed Ismail"
                className="text-inverse"
                delay={300}
              />
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-secondary mb-12 max-w-3xl mx-auto font-light"
          >
            Full-Stack Software Engineer
            <br />
            <span className="text-cyber-green">Building Digital Experiences That Scale</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-cyber-green text-dark font-semibold flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Work</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="/contact"
              className="px-8 py-4 rounded-lg border-2 border-cyber-green text-cyber-green font-semibold flex items-center gap-2 group hover:bg-cyber-green hover:text-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-secondary">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-cyber-green" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

