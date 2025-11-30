"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Rocket } from "lucide-react";
import MorphingBlob from "./MorphingBlob";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand requirements, analyze needs, and define project goals. I dive deep into understanding your vision and translating it into a technical roadmap.",
    icon: Search,
  },
  {
    step: "02",
    title: "Build",
    description: "Develop with precision using modern technologies and best practices. I craft scalable, maintainable solutions that exceed expectations.",
    icon: Code,
  },
  {
    step: "03",
    title: "Launch",
    description: "Deliver scalable solutions that grow with your business. From deployment to monitoring, I ensure everything runs smoothly in production.",
    icon: Rocket,
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Morphing 3D Blob Background */}
      <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gradient">
              My Process
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light">
              A structured approach to{" "}
              <span className="text-cyber-green">building exceptional products</span>{" "}
              from concept to deployment.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="glass-card border border-border rounded-2xl p-8 md:p-10 hover:border-cyber-green hover:cyber-glow transition-all duration-300 h-full flex flex-col">
                    {/* Step Number */}
                    <motion.div
                      className="text-6xl md:text-7xl font-bold mb-6 text-cyber-green/20 group-hover:text-cyber-green/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center mb-6 group-hover:bg-cyber-green/20 group-hover:border-cyber-green/50 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-cyber-green" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-inverse mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed font-light flex-1">
                      {step.description}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      className="mt-6 h-1 bg-gradient-to-r from-cyber-green/50 to-transparent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    />
                  </div>

                  {/* Connecting Arrow (Desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <motion.svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-cyber-green/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-secondary max-w-2xl mx-auto font-light mb-8">
              Ready to start your project? Let&apos;s build something extraordinary together.
            </p>
            <motion.a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cyber-green text-dark font-semibold hover:bg-cyber-green/80 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
