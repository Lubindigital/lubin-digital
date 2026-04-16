"use client";

import React from "react";

interface AetherFlowCanvasProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  lineHighlightColor?: string;
}

/**
 * Full-screen particle canvas with mouse-reactive connections.
 * Use as an absolute-positioned background layer.
 */
const AetherFlowCanvas: React.FC<AetherFlowCanvasProps> = ({
  className,
  particleColor = "rgba(191, 128, 255, 0.8)",
  lineColor = "rgba(200, 150, 255,",
  lineHighlightColor = "rgba(255, 255, 255,",
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 200 };
    const isMobile = window.innerWidth < 768;

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 5;
            this.y -= forceDirectionY * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      // Fewer particles on mobile for performance, also reduce connection threshold
      const divisor = isMobile ? 18000 : 9000;
      const numberOfParticles = (canvas!.height * canvas!.width) / divisor;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas!.width - size * 4) + size * 2;
        const y = Math.random() * (canvas!.height - size * 4) + size * 2;
        const speed = isMobile ? 0.15 : 0.2;
        const directionX = Math.random() * (speed * 2) - speed;
        const directionY = Math.random() * (speed * 2) - speed;
        particles.push(new Particle(x, y, directionX, directionY, size, particleColor));
      }
    }

    const resizeCanvas = () => {
      canvas!.width = window.innerWidth;
      // Use parent height if taller than viewport (min-h-screen sections)
      const parentHeight = canvas!.parentElement?.offsetHeight ?? window.innerHeight;
      canvas!.height = Math.max(window.innerHeight, parentHeight);
      init();
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const connect = () => {
      const connectionThreshold = isMobile
        ? (canvas!.width / 10) * (canvas!.height / 10)
        : (canvas!.width / 7) * (canvas!.height / 7);

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);

          if (distance < connectionThreshold) {
            const opacityValue = 1 - distance / 20000;

            if (mouse.x !== null && mouse.y !== null) {
              const dxA = particles[a].x - mouse.x;
              const dyA = particles[a].y - mouse.y;
              const distMouseA = Math.sqrt(dxA * dxA + dyA * dyA);

              if (distMouseA < mouse.radius) {
                ctx!.strokeStyle = `${lineHighlightColor} ${opacityValue})`;
              } else {
                ctx!.strokeStyle = `${lineColor} ${opacityValue})`;
              }
            } else {
              ctx!.strokeStyle = `${lineColor} ${opacityValue})`;
            }

            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx!.fillStyle = "black";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Only attach mouse interaction on non-touch devices to avoid sporadic behavior
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseOut);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleColor, lineColor, lineHighlightColor]);

  return <canvas ref={canvasRef} className={className} />;
};

export default AetherFlowCanvas;
