import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export default function SectionReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 1,
}: SectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const getInitialPosition = () => {
      switch (direction) {
        case 'up':
          return { y: 80, x: 0 };
        case 'down':
          return { y: -80, x: 0 };
        case 'left':
          return { x: 80, y: 0 };
        case 'right':
          return { x: -80, y: 0 };
        default:
          return { y: 80, x: 0 };
      }
    };

    const initialPos = getInitialPosition();

    gsap.fromTo(
      section,
      {
        ...initialPos,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, delay, duration]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
