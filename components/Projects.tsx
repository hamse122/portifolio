"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import MorphingBlob from "./MorphingBlob";

const projects = [
  {
    title: "Time-Out Restaurant Management System",
    tagline: "Complete restaurant operations management",
    tech: ["Django", "PostgreSQL", "React"],
  },
  {
    title: "Ifiye Agri AI",
    tagline: "AI-powered agricultural solutions",
    tech: ["Python", "AI/ML", "Flutter"],
  },
  {
    title: "Exam-Record Management System",
    tagline: "Streamlined academic record keeping",
    tech: ["Django", "MySQL", "Bootstrap"],
  },
  {
    title: "VIP Game Center Management System",
    tagline: "Gaming center operations platform",
    tech: ["Next.js", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Pharmacy Management System",
    tagline: "Comprehensive pharmacy operations",
    tech: ["Django", "React", "PostgreSQL"],
  },
  {
    title: "Police Management System",
    tagline: "Law enforcement management platform",
    tech: ["Next.js", "PostgreSQL", "TailwindCSS"],
  },
  {
    title: "Max Gym Management System",
    tagline: "Fitness center management solution",
    tech: ["Flutter", "Django", "MySQL"],
  },
  {
    title: "Electronic Health Record (EHR) System",
    tagline: "Secure healthcare data management",
    tech: ["Next.js", "PostgreSQL", "TypeScript"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark py-20"
    >
      {/* Morphing 3D Blob Background */}
      <MorphingBlob />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light">
              A showcase of{" "}
              <span className="text-cyber-green">innovative solutions</span> built
              with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: -5 }}
                className="group relative project-card"
              >
                <div className="glass-card border border-border rounded-2xl overflow-hidden hover:border-cyber-green hover:cyber-glow transition-all duration-300 h-full flex flex-col relative">
                  {/* Project Image/Mockup - Placeholder for live demo */}
                  <div className="relative h-48 bg-background-dark/20 overflow-hidden flex items-center justify-center">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-6xl text-cyber-green/30 group-hover:text-cyber-green/50 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      🚀
                    </motion.div>
                    <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors" />

                    {/* Tech Stack Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="px-3 py-1 rounded-full bg-cyber-green/20 border border-cyber-green/50 text-cyber-green text-xs font-semibold"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-inverse mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-inverse/70 mb-6 flex-1 font-light">
                      {project.tagline}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 rounded-full bg-background-dark/50 border border-border text-xs text-cyber-green hover:border-cyber-green hover:bg-cyber-green/10 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href="#"
                        className="flex-1 px-4 py-2.5 rounded-lg bg-cyber-green text-dark text-sm font-semibold flex items-center justify-center gap-2 hover:bg-cyber-green/80 transition-colors relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="flex-1 px-4 py-2.5 rounded-lg glass-card border border-border text-text-inverse text-sm font-semibold flex items-center justify-center gap-2 hover:border-cyber-green hover:text-cyber-green transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      boxShadow: "0 0 40px rgba(0, 255, 136, 0.2)",
                    }}
                  />
                </div>

                {/* Background Glow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-cyber-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}