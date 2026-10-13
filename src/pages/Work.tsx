import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import SectionReveal from '@/components/SectionReveal';

import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Urban Neon',
    category: 'Brand Campaign',
    description: 'A citywide brand activation that transformed urban landscapes into living billboards.',
    image: portfolio1,
    tags: ['Marketing', 'Branding', 'Production'],
  },
  {
    id: 2,
    title: 'Studio Sessions',
    category: 'Cinematography',
    description: 'Behind-the-scenes production showcasing our state-of-the-art filming capabilities.',
    image: portfolio2,
    tags: ['Video', 'Production', 'Commercial'],
  },
  {
    id: 3,
    title: 'Gala Experience',
    category: 'Event Production',
    description: 'A luxury corporate gala featuring immersive lighting and premium guest experiences.',
    image: portfolio3,
    tags: ['Events', 'Lighting', 'Experience'],
  },
  {
    id: 4,
    title: 'Digital Launch',
    category: 'Web Development',
    description: 'Premium website and digital presence for a tech startup launch.',
    image: portfolio4,
    tags: ['Web', 'UI/UX', 'Branding'],
  },
];

export default function Work() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const horizontal = horizontalRef.current;
    const container = containerRef.current;

    if (!horizontal || !container) return;

    const ctx = gsap.context(() => {
      const cards = horizontal.querySelectorAll('.project-card');
      
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => '+=' + horizontal.offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto text-center relative">
          <SectionReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <AnimatedHeading as="h1" className="font-display text-4xl md:text-6xl font-bold mb-6">
              The Work
            </AnimatedHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our portfolio of transformative projects that have helped brands 
              create lasting impact and meaningful connections.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section ref={containerRef} className="h-screen overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        
        <div
          ref={horizontalRef}
          className="flex h-full items-center"
          style={{ width: `${projects.length * 100}vw` }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card w-screen h-full flex items-center justify-center px-8 md:px-16"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Image */}
                <div className="relative group order-2 lg:order-1">
                  <div className="hologram rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[50vh] object-cover transition-all duration-700 group-hover:scale-105 filter blur-[2px] group-hover:blur-0"
                    />
                    
                    {/* Light Leak Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Project Number */}
                  <div className="absolute -bottom-8 -left-8 font-display text-[150px] font-bold text-primary/10">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                  <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
                    {project.category}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 border border-primary/30 rounded-full text-sm text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="btn-magnetic">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {projects.map((_, index) => (
            <div
              key={index}
              className="w-12 h-1 bg-muted rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: '100%' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 overflow-hidden border-y border-border">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {['Branding', 'Marketing', 'Cinematography', 'Events', 'Web Development', 'Strategy'].map((item) => (
                <span
                  key={`${i}-${item}`}
                  className="font-display text-4xl md:text-6xl font-bold mx-8 text-muted-foreground/30 hover:text-primary transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionReveal className="text-center mb-16">
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-5xl font-bold">
              More Projects
            </AnimatedHeading>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...projects, ...projects.slice(0, 2)].map((project, index) => (
              <SectionReveal key={`grid-${index}`} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-lg hologram cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <span className="text-primary text-xs tracking-widest uppercase">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
