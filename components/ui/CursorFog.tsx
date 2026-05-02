"use client";

import { useEffect, useRef } from "react";

class SmokeParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // Base size between 15 and 35
    this.size = Math.random() * 20 + 15; 
    // Drift slightly left/right and mostly upwards
    this.speedX = Math.random() * 1.5 - 0.75; 
    this.speedY = Math.random() * -1.5 - 0.5; 
    // Live for 40 to 80 frames
    this.maxLife = Math.random() * 40 + 40; 
    this.life = this.maxLife;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size += 0.8; // Smoke expands as it dissipates
    this.life--;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Fade out as life decreases. Max opacity 0.15 for subtle effect.
    const opacity = Math.max(0, (this.life / this.maxLife) * 0.15);
    
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, `rgba(34, 34, 34, ${opacity})`);
    gradient.addColorStop(1, `rgba(34, 34, 34, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function CursorFog() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<SmokeParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, moved: false });
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Handle Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.moved = true;
      
      // Spawn 1-2 particles per mouse movement tick
      const spawnCount = Math.random() > 0.5 ? 2 : 1;
      for (let i = 0; i < spawnCount; i++) {
        // Add slight scatter to spawn location
        const offsetX = Math.random() * 10 - 5;
        const offsetY = Math.random() * 10 - 5;
        particlesRef.current.push(new SmokeParticle(e.clientX + offsetX, e.clientY + offsetY));
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw(ctx);
      }

      // Remove dead particles
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-multiply"
    />
  );
}
