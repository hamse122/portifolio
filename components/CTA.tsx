"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import MorphingBlob from "./MorphingBlob";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-20 md:py-32 pb-32 md:pb-40 flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Morphing 3D Blob Background */}
      <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero-Style Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gradient">
              Let&apos;s Connect
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light mb-12">
              Ready to collaborate on your next{" "}
              <span className="text-cyber-green">big project</span>? Get in touch
              and let&apos;s build something amazing together.
            </p>

            {/* Contact Button */}
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cyber-green text-dark font-semibold hover:bg-cyber-green/80 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-green/40 to-transparent" />
    </section>
  );
}

