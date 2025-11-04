"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: "radial-gradient(circle, rgba(10, 182, 188, 0.4) 0%, transparent 70%)",
      }}
    />
  );
}


