import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
  type: 'spark' | 'willow' | 'crackle';
  gravity: number;
  friction: number;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  targetX: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  burstType: 'willow' | 'chrysanthemum' | 'peony' | 'crackle' | 'palm';
}

// Curated Luxury Color Palettes
const LUXURY_PALETTES = [
  ['#FFF6D1', '#F5D061', '#D4AF37', '#E6CA65', '#AA771C'], // Royal Gold
  ['#FFE58F', '#F5A623', '#FF4D4F', '#D4AF37'],             // Gold & Ruby
  ['#52C41A', '#B7EB8F', '#D4AF37', '#FFD666'],             // Emerald & Gold
  ['#40A9FF', '#91D5FF', '#FADB14', '#D4AF37'],             // Sapphire & Gold
  ['#FF7A45', '#FFFBE6', '#52C41A', '#D4AF37'],             // Tricolour Festive
];

const MAX_TOTAL_PARTICLES = 300;

interface FireworksCanvasProps {
  interactive?: boolean;
  density?: 'subtle' | 'normal' | 'cinematic';
  triggerBurst?: { x: number; y: number; timestamp: number } | null;
}

export const FireworksCanvas: React.FC<FireworksCanvasProps> = ({
  interactive = true,
  density = 'normal',
  triggerBurst = null
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rocketsRef = useRef<Rocket[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const createBurst = useCallback((
    x: number,
    y: number,
    colorPalette: string[],
    burstType: 'willow' | 'chrysanthemum' | 'peony' | 'crackle' | 'palm' = 'willow'
  ) => {
    // Keep particle counts balanced for silky smooth 60fps
    const baseCount = burstType === 'palm' ? 65 : burstType === 'willow' ? 55 : 45;

    // Prevent particle list from growing indefinitely
    if (particlesRef.current.length > MAX_TOTAL_PARTICLES) {
      particlesRef.current.splice(0, particlesRef.current.length - MAX_TOTAL_PARTICLES + 50);
    }

    const isWillow = burstType === 'willow';

    for (let i = 0; i < baseCount; i++) {
      const angle = (Math.PI * 2 * i) / baseCount + (Math.random() - 0.5) * 0.15;
      const speed = isWillow
        ? Math.random() * 3.2 + 1.2
        : Math.random() * 4.8 + 1.6;

      const color = colorPalette[i % colorPalette.length];

      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: isWillow ? Math.random() * 0.012 + 0.008 : Math.random() * 0.022 + 0.015,
        color,
        size: isWillow ? 2 : 2.5,
        type: isWillow ? 'willow' : burstType === 'crackle' ? 'crackle' : 'spark',
        gravity: isWillow ? 0.045 : 0.065,
        friction: 0.968
      });
    }

    // Flash burst centre (core spark)
    for (let j = 0; j < 6; j++) {
      const flashAngle = Math.random() * Math.PI * 2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(flashAngle) * 1.5,
        vy: Math.sin(flashAngle) * 1.5,
        alpha: 1,
        decay: 0.07,
        color: '#FFFFFF',
        size: 3,
        type: 'spark',
        gravity: 0.02,
        friction: 0.95
      });
    }
  }, []);

  const launchRocket = useCallback((
    startX?: number,
    targetX?: number,
    targetY?: number,
    forcedType?: 'willow' | 'chrysanthemum' | 'peony' | 'crackle' | 'palm'
  ) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const sx = startX !== undefined ? startX : Math.random() * (canvas.width * 0.8) + (canvas.width * 0.1);
    const tx = targetX !== undefined ? targetX : sx + (Math.random() - 0.5) * 80;
    const ty = targetY !== undefined ? targetY : Math.random() * (canvas.height * 0.45) + (canvas.height * 0.1);

    const burstTypes: ('willow' | 'chrysanthemum' | 'peony' | 'crackle' | 'palm')[] = ['willow', 'chrysanthemum', 'peony', 'crackle', 'palm'];
    const chosenType = forcedType || burstTypes[Math.floor(Math.random() * burstTypes.length)];

    const palette = LUXURY_PALETTES[Math.floor(Math.random() * LUXURY_PALETTES.length)];
    const color = palette[0];

    const dx = tx - sx;
    const dy = ty - canvas.height;
    const distance = Math.hypot(dx, dy);
    const speed = Math.random() * 2 + 10;

    rocketsRef.current.push({
      x: sx,
      y: canvas.height,
      targetX: tx,
      targetY: ty,
      vx: (dx / distance) * speed,
      vy: (dy / distance) * speed,
      color,
      size: 2.2,
      burstType: chosenType,
    });
  }, []);

  // External trigger listener
  useEffect(() => {
    if (triggerBurst && canvasRef.current) {
      const palette = LUXURY_PALETTES[0];
      createBurst(triggerBurst.x, triggerBurst.y, palette, 'palm');
    }
  }, [triggerBurst, createBurst]);

  // Main rendering loop optimized for high FPS
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#030305';
      ctx.fillRect(0, 0, width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const intervalMs = density === 'cinematic' ? 1800 : density === 'normal' ? 2800 : 4500;
    const launcherInterval = setInterval(() => {
      if (document.hidden) return;
      if (rocketsRef.current.length < 3) {
        launchRocket();
      }
    }, intervalMs);

    // Initial gentle launch
    setTimeout(() => launchRocket(width * 0.4), 300);

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;
      const timeScale = dt * 60; // Normalize to 60fps

      // Natural trail fade without heavy composite operations
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(3, 3, 5, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // Additive blending for luminous fireworks without expensive shadowBlur
      ctx.globalCompositeOperation = 'lighter';

      // 1. Render Rockets
      const rockets = rocketsRef.current;
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];

        // Draw ascending rocket head
        ctx.fillStyle = '#FFE58F';
        ctx.fillRect(r.x - 1.5, r.y - 1.5, 3, 3);

        // Rocket spark tail
        ctx.fillStyle = 'rgba(254, 240, 138, 0.6)';
        ctx.fillRect(r.x - 1, r.y + 3, 2, 6);

        r.x += r.vx * timeScale;
        r.y += r.vy * timeScale;

        // Apex check
        if (r.y <= r.targetY || r.vy >= 0) {
          const palette = LUXURY_PALETTES[Math.floor(Math.random() * LUXURY_PALETTES.length)];
          createBurst(r.x, r.y, palette, r.burstType);
          rockets.splice(i, 1);
        }
      }

      // 2. Batch Render Particles (Fast & smooth, no ctx.save / ctx.restore / shadowBlur)
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.vx *= Math.pow(p.friction, timeScale);
        p.vy *= Math.pow(p.friction, timeScale);
        p.vy += p.gravity * timeScale;
        p.x += p.vx * timeScale;
        p.y += p.vy * timeScale;
        p.alpha -= p.decay * timeScale;

        if (p.alpha <= 0 || p.y > height + 20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        // Fast rectangular / circular point rendering
        if (p.size <= 2) {
          ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(launcherInterval);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [createBurst, launchRocket, density]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (y < window.innerHeight * 0.6) {
      launchRocket(x + (Math.random() - 0.5) * 50, x, y, 'willow');
    } else {
      const palette = LUXURY_PALETTES[0];
      createBurst(x, y, palette, 'palm');
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="w-full h-full pointer-events-auto cursor-crosshair opacity-90 will-change-transform"
        style={{ transform: 'translateZ(0)' }}
        title="Click anywhere to ignite festive fireworks!"
      />
    </div>
  );
};
