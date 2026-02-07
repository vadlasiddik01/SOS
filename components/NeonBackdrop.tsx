'use client';

import { useEffect, useRef } from 'react';

export default function NeonBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Draw grid
    const drawGrid = (time: number) => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0, 180, 219, 0.1)';
      ctx.lineWidth = 0.5;

      const gridSize = 50;
      const offset = (time * 10) % gridSize;

      // Horizontal lines
      for (let y = -gridSize + offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = -gridSize + offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw particles
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time * 0.001 + i) * canvas.width * 0.5) + canvas.width * 0.5;
        const y = (Math.cos(time * 0.0008 + i * 0.5) * canvas.height * 0.5) + canvas.height * 0.5;

        const size = Math.sin(time * 0.001 + i) * 1 + 2;
        ctx.fillStyle = `rgba(0, 180, 219, ${Math.sin(time * 0.001 + i) * 0.5 + 0.5})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let animationId: number;
    const animate = (time: number) => {
      drawGrid(time);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
}
