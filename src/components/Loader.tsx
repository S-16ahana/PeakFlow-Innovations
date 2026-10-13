import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete,
        });
      },
    });

    // Initial sphere animation
    tl.fromTo(
      sphereRef.current,
      { scale: 0, opacity: 0, rotate: 0 },
      { scale: 1, opacity: 1, rotate: 360, duration: 1.5, ease: 'power2.out' }
    )
      .to(sphereRef.current, { scale: 0.85, duration: 0.3, ease: 'power2.in' })
      .to(sphereRef.current, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      .to(sphereRef.current, { scale: 1, duration: 0.2 })
      // Remove logo animation from timeline - let progress handle it
      .to({}, { duration: 0.8 })
      .to(groupRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
      });

    return () => {
      clearInterval(progressInterval);
      tl.kill();
    };
  }, [onComplete]);

  // Sync logo animation with loading progress
  useEffect(() => {
    if (textRef.current) {
      const progress = Math.min(loadingProgress, 100) / 100;
      // Use ease-in-out curve for smoother transition
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const clipPathValue = `inset(0 ${100 - easedProgress * 100}% 0 0)`;
      const opacity = Math.min(1, easedProgress * 1.5); // Slightly faster opacity
      
      gsap.to(textRef.current, {
        clipPath: clipPathValue,
        opacity: opacity,
        duration: 0.3, // Smooth transition
        ease: "power2.out"
      });
    }
  }, [loadingProgress]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 particles-bg" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Centered Group */}
      <div className="absolute inset-0 flex items-start justify-center pt-40">
        <div
          ref={groupRef}
          className="flex flex-col items-center leading-none"
        >
          {/* Sphere (Triangle-with-circle) */}
          <div
            ref={sphereRef}
            className="relative w-44 h-44 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/40 backdrop-blur-sm neon-border">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full p-4"
              >
                <path
                  d="M50 20 L80 80 L20 80 Z"
                  fill="none"
                  stroke="hsl(156, 100%, 50%)"
                  strokeWidth="2"
                />
                <path
                  d="M50 35 L65 65 L35 65 Z"
                  fill="hsl(156, 100%, 50%)"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <div className="absolute inset-0 animate-rotate-slow">
              <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-full rounded-full bg-primary neon-glow" />
              </div>
            </div>
          </div>

          {/* Logo */}
          <div ref={textRef} className="-mt-16"> {/* Much larger negative margin to move up */}
            <img
              src="/newlogo.png"
              alt="Peakflow Innovations Logo"
              className="w-[360px] max-w-[85vw] object-contain drop-shadow-[0_0_40px_rgba(0,255,180,0.8)]"
            />
          </div>
        </div>
      </div>

      {/* Loading Bar */}
      <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 w-48"> {/* Position relative to top */}
        <div className="h-0.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out neon-glow"
            style={{ width: `${Math.min(loadingProgress, 100)}%` }}
          />
        </div>
        <p className="text-center text-muted-foreground text-xs mt-1 tracking-widest">
          {Math.min(Math.round(loadingProgress), 100)}%
        </p>
      </div>
    </div>
  );
}
