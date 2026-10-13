import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Instant dot movement
      gsap.to(cursorDot, {
        x: mouseX - 2,
        y: mouseY - 2,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Smooth cursor follow
    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      gsap.set(cursor, {
        x: cursorX - 10,
        y: cursorY - 10,
      });

      requestAnimationFrame(animateCursor);
    };

    // Handle hover effects on interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('btn-magnetic');

      if (isInteractive) {
        gsap.to(cursor, {
          scale: 2,
          borderColor: 'hsl(156, 100%, 50%)',
          duration: 0.3,
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          borderColor: 'hsl(156, 100%, 50%)',
          duration: 0.3,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.3s' }}
      />
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.3s' }}
      />
    </>
  );
}
