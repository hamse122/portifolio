"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  velocity: number;
  life: number;
}

const colors = ["#00FF88", "#FF0080", "#00D4FF", "#FFD700", "#FF6B35", "#7B2CBF"];

export default function Fireworks({ trigger }: { trigger: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    if (!trigger) {
      setParticles([]);
      return;
    }

    // Animate existing particles
    const animationInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + Math.cos(p.angle) * p.velocity * 10,
            y: p.y + Math.sin(p.angle) * p.velocity * 10,
            velocity: p.velocity * 0.95,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    // Create new firework bursts continuously
    const burstInterval = setInterval(() => {
      const bursts = [
        { x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.4 + 0.2 },
        { x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.4 + 0.4 },
      ];

      const newParticles: Particle[] = [];
      
      bursts.forEach((burst) => {
        const particleCount = 40;
        for (let i = 0; i < particleCount; i++) {
          const angle = (Math.PI * 2 * i) / particleCount;
          const velocity = 0.3 + Math.random() * 0.2;
          newParticles.push({
            id: particleIdRef.current++,
            x: burst.x * window.innerWidth,
            y: burst.y * window.innerHeight,
            color: colors[Math.floor(Math.random() * colors.length)],
            angle,
            velocity,
            life: 1,
          });
        }
      });

      setParticles((prev) => [...prev, ...newParticles]);
    }, 800); // Create new bursts every 800ms

    return () => {
      clearInterval(animationInterval);
      clearInterval(burstInterval);
    };
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: particle.life,
            scale: particle.life,
          }}
        />
      ))}
    </div>
  );
}

