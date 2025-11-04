"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let frame = 0;
    let iteration = 0;

    const scramble = () => {
      const maxIterations = 30;
      
      if (iteration < maxIterations) {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        iteration += 1/3;
        frame = requestAnimationFrame(scramble);
      } else {
        setDisplayText(text);
        setIsAnimating(false);
      }
    };

    timeout = setTimeout(() => {
      frame = requestAnimationFrame(scramble);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [text, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimating ? 0.8 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  );
}


