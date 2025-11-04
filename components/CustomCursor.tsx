"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.closest("a")) {
        setCursorVariant("link");
      } else if (target.closest("[data-project-card]")) {
        setCursorVariant("project");
      } else if (target.closest("input, textarea, button")) {
        setCursorVariant("input");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(0, 255, 136, 0.1)",
      border: "2px solid rgba(0, 255, 136, 0.5)",
      borderRadius: "50%",
      mixBlendMode: "difference" as const,
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(0, 255, 136, 0.2)",
      border: "2px solid #00FF88",
      borderRadius: "50%",
      mixBlendMode: "normal" as const,
    },
    project: {
      width: 64,
      height: 64,
      backgroundColor: "transparent",
      border: "2px solid #00FF88",
      borderRadius: "50%",
      mixBlendMode: "normal" as const,
      scale: 1.2,
    },
    input: {
      width: 4,
      height: 20,
      backgroundColor: "#00FF88",
      border: "none",
      mixBlendMode: "normal" as const,
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={variants[cursorVariant as keyof typeof variants]}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      />

      {/* Project cursor icon */}
      {cursorVariant === "project" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998] text-cyber-green"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: -12,
            translateY: -12,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 3H21V9M9 21H3V15M21 21L12 12M3 3L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      )}
    </>
  );
}

