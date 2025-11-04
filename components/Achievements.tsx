"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Medal } from "lucide-react";
import MorphingBlob from "./MorphingBlob";

const achievements = [
  {
    title: "Abaarso Tech Hackathon",
    description: "Participated and showcased innovative solutions in a competitive tech environment, demonstrating technical excellence and creative problem-solving skills.",
    year: "2023",
    icon: Trophy,
  },
  {
    title: "XALKADOON Hackathon",
    description: "Collaborated with talented developers to build cutting-edge solutions, emphasizing teamwork and innovative thinking in software development.",
    year: "2024",
    icon: Award,
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
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
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gradient">
              Achievements & Recognition
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-3xl mx-auto font-light">
              Celebrating{" "}
              <span className="text-cyber-green">milestones and accomplishments</span>{" "}
              in my journey as a developer.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50, rotateX: 10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, rotateX: -5 }}
                  className="group relative"
                >
                  <div className="glass-card border border-border rounded-2xl p-8 md:p-10 hover:border-cyber-green hover:cyber-glow transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                    {/* Background Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "radial-gradient(circle at center, rgba(0, 255, 136, 0.1) 0%, transparent 70%)",
                      }}
                    />

                    {/* Year Badge */}
                    <motion.div
                      className="absolute top-6 right-6 px-4 py-2 rounded-full bg-cyber-green/20 border border-cyber-green/30 text-cyber-green text-sm font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {achievement.year}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-xl bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center mb-6 group-hover:bg-cyber-green/20 group-hover:border-cyber-green/50 transition-all relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-10 h-10 text-cyber-green" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-inverse mb-4">
                        {achievement.title}
                      </h3>
                      <p className="text-lg text-secondary leading-relaxed font-light">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Decorative Gradient Line */}
                    <motion.div
                      className="mt-6 h-1 bg-gradient-to-r from-cyber-green/50 via-cyber-green/30 to-transparent rounded-full relative z-10"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    />
                  </div>

                  {/* Glow Shadow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-cyber-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Additional Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <Medal className="w-16 h-16 text-cyber-green mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-inverse mb-4">
              Continuous Learning
            </h3>
            <p className="text-lg text-secondary max-w-2xl mx-auto font-light leading-relaxed">
              Beyond hackathons, I&apos;m committed to continuous improvement and staying
              updated with the latest technologies and best practices in software
              development. Every project is an opportunity to learn and grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
