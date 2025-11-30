"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MorphingBlob from "./MorphingBlob";
import SkillIcon from "./SkillIcon";

const skills = [
  { name: "Django", level: 95 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 88 },
  { name: "Flutter", level: 85 },
  { name: "PostgreSQL", level: 90 },
  { name: "MySQL", level: 88 },
  { name: "TailwindCSS", level: 92 },
  { name: "PHP", level: 80 },
  { name: "Git", level: 85 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
              Tech Mastery
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light">
              A comprehensive skill set in{" "}
              <span className="text-cyber-green">modern technologies</span> and
              development frameworks.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <motion.div className="glass-card border border-border rounded-xl p-6 text-center hover:border-cyber-green hover:cyber-glow transition-all duration-300 h-full flex flex-col items-center justify-between">
                  {/* Icon */}
                  <div className="mb-4 text-cyber-green">
                    <SkillIcon name={skill.name} className="w-12 h-12" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold text-inverse mb-4">
                    {skill.name}
                  </h3>

                  {/* Progress Ring */}
                  <div className="relative w-24 h-24 mb-2">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#00FF88" />
                          <stop offset="100%" stopColor="#00cc6a" />
                        </linearGradient>
                      </defs>
                      {/* Background Circle */}
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke="rgba(0, 255, 136, 0.1)"
                        strokeWidth="4"
                        fill="none"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                        animate={
                          isInView
                            ? {
                                strokeDashoffset:
                                  2 * Math.PI * 42 * (1 - skill.level / 100),
                              }
                            : {
                                strokeDashoffset: 2 * Math.PI * 42,
                              }
                        }
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        style={{
                          filter:
                            "drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))",
                        }}
                      />
                    </svg>

                    {/* Percentage Display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-sm font-bold text-cyber-green"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.8,
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      boxShadow: "0 0 40px rgba(0, 255, 136, 0.2)",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-secondary max-w-2xl mx-auto font-light">
              Continuously learning and mastering new technologies to deliver
              cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
