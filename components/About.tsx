"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileText } from "lucide-react";
import MorphingBlob from "./MorphingBlob";

const timeline = [
  {
    year: "2024",
    title: "Full-Stack Engineer",
    company: "Freelance & Startups",
    description: "Building scalable web applications with Django, React, and Next.js for various clients.",
  },
  {
    year: "2023",
    title: "Software Developer",
    company: "Institutional Projects",
    description: "Developed management systems for restaurants, pharmacies, and healthcare institutions.",
  },
  {
    year: "2022",
    title: "Web Developer",
    company: "Entry Level",
    description: "Started journey in full-stack development, focusing on Django and React ecosystems.",
  },
];

const skills = [
  "Django",
  "React",
  "Next.js",
  "Flutter",
  "PostgreSQL",
  "TypeScript",
  "Python",
  "TailwindCSS",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Morphing 3D Blob Background */}
      <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gradient tracking-wide">
              About Me
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light">
              A journey through innovation, learning, and building{" "}
              <span className="text-cyber-green">digital solutions</span> that
              make a difference.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-secondary leading-relaxed font-light">
                  I&apos;m a passionate full-stack engineer with a focus on
                  creating scalable, intuitive digital experiences. My journey
                  spans from building startup MVPs to developing enterprise-grade
                  management systems.
                </p>
                <p className="text-lg md:text-xl text-secondary leading-relaxed font-light">
                  I specialize in modern web technologies, combining the power of
                  Django and PostgreSQL on the backend with React and Next.js on
                  the frontend to deliver fast, reliable solutions.
                </p>
                <p className="text-lg md:text-xl text-secondary leading-relaxed font-light">
                  From concept to deployment, I turn ideas into working products
                  that scale with your business needs.
                </p>
              </div>

              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-cyber-green text-cyber-green font-semibold hover:bg-cyber-green hover:text-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                View Resume
              </motion.a>
            </motion.div>

            {/* Right Side - Interactive Timeline */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {/* Timeline Items */}
              <div className="relative space-y-16">
                {timeline.map((item, index) => {
                  const itemProgress = useTransform(
                    scrollYProgress,
                    [
                      (index * 0.3) / timeline.length,
                      ((index + 1) * 0.3) / timeline.length,
                    ],
                    [0, 1],
                    { clamp: true }
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="relative pl-20"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-2">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-dark border-2 border-cyber-green flex items-center justify-center relative z-10"
                          style={{
                            boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
                          }}
                        >
                          {/* Animated Dot Fill */}
                          <motion.div
                            className="absolute inset-2 rounded-full bg-cyber-green"
                            style={{
                              scale: itemProgress,
                              opacity: itemProgress,
                            }}
                          />

                          {/* Year Badge */}
                          <span className="text-xs font-bold text-cyber-green relative z-10">
                            {item.year.slice(-2)}
                          </span>
                        </motion.div>

                        {/* Connecting Line Animation */}
                        {index < timeline.length - 1 && (
                          <motion.svg
                            className="absolute left-8 top-16 w-0.5"
                            height="64"
                            viewBox="0 0 2 64"
                            style={{ overflow: "visible" }}
                          >
                            <motion.path
                              d="M 1 0 L 1 64"
                              stroke="#00FF88"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="64"
                              strokeDashoffset={useTransform(
                                itemProgress,
                                [0, 1],
                                [64, 0]
                              )}
                              style={{
                                filter:
                                  "drop-shadow(0 0 4px rgba(0, 255, 136, 0.5))",
                              }}
                            />
                          </motion.svg>
                        )}
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className="glass-card rounded-xl p-6 hover:cyber-glow transition-all duration-300"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-inverse mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-cyber-green font-medium">
                              {item.company}
                            </p>
                          </div>
                          <span className="text-xs font-bold text-secondary">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Badges Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-inverse mb-12">
              Core Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-lg border border-border text-base text-secondary hover:border-cyber-green hover:text-cyber-green transition-all cursor-default glass-card"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
