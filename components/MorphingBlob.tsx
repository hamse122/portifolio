"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MorphingBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (blobRef.current) {
        const rect = blobRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set((e.clientX - centerX) * 0.1);
        mouseY.set((e.clientY - centerY) * 0.1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={blobRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        filter: "blur(60px)",
        opacity: 0.3,
      }}
    >
      <motion.div
        className="relative w-96 h-96 rounded-full"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, #00FF88 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          borderRadius: ["70% 30% 30% 70% / 70% 70% 30% 30%", "50% 50% 50% 50% / 50% 50% 50% 50%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}


