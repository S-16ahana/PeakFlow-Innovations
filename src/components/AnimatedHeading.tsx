import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedHeadingProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function AnimatedHeading({
  children,
  className = '',
  delay = 0,
  as: Tag = 'h2',
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated.current) return;

    const words = children.split(' ');
    container.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`)
      .join(' ');

    const wordElements = container.querySelectorAll('.word');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            gsap.fromTo(
              wordElements,
              {
                y: '100%',
                opacity: 0,
              },
              {
                y: '0%',
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                delay,
                ease: 'power3.out',
              }
            );

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [children, delay]);

  return (
    <Tag ref={containerRef} className={`${className}`}>
      {children}
    </Tag>
  );
}
