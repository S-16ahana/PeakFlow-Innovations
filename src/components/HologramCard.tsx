import { useRef, useState } from 'react';

interface HologramCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
}

export default function HologramCard({ title, description, image, index = 0 }: HologramCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[400px] cursor-pointer"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Card Container */}
      <div
        className="relative h-full hologram rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${(0.5 - mousePosition.y) * 10}deg)`,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute w-full h-0.5 bg-primary animate-scan" />
        </div>

        {/* Hologram Grid */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>

          {/* Hover Arrow */}
          <div className="mt-4 flex items-center gap-2 text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-sm font-body tracking-wider">Explore</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary opacity-50" />
        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary opacity-50" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary opacity-50" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary opacity-50" />

        {/* Glow on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(156 100% 50% / 0.15), transparent 50%)`,
          }}
        />
      </div>
    </div>
  );
}
