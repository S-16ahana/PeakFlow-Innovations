import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSphere from '@/components/HeroSphere';
import AnimatedHeading from '@/components/AnimatedHeading';
import SectionReveal from '@/components/SectionReveal';
import HologramCard from '@/components/HologramCard';

import heroBg from '@/assets/hero-bg.jpg';
import hologramCard1 from '@/assets/hologram-card-1.png';
import hologramCard2 from '@/assets/hologram-card-2.png';
import hologramCard3 from '@/assets/hologram-card-3.png';
import hologramCard4 from '@/assets/hologram-card-4.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive growth and maximize ROI across all digital channels.',
    image: hologramCard1,
  },
  {
    title: '360° Cinematography',
    description: 'Cinematic storytelling with cutting-edge production and immersive visual experiences.',
    image: hologramCard2,
  },
  {
    title: 'Website Development',
    description: 'Premium web solutions with futuristic design and seamless user experiences.',
    image: hologramCard3,
  },
  {
    title: 'Events & Operations',
    description: 'End-to-end event management with flawless execution and memorable experiences.',
    image: hologramCard4,
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const tagline = taglineRef.current;

    if (!hero || !tagline) return;

    // Hero text animation
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      tagline.querySelectorAll('.line'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );

    // Parallax effect on scroll
    gsap.to(hero, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* 3D Sphere */}
        <HeroSphere />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 border border-primary/30 rounded-full text-primary text-sm tracking-widest uppercase animate-fade-in">
              Marketing × Media × Operations
            </span>
          </div>

          <div ref={taglineRef} className="mb-12">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="line block">We Don't Create Noise.</span>
              <span className="line block text-primary text-glow">We Create Momentum.</span>
            </h1>
            <p className="line text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-6">
              A premium creative agency delivering transformative marketing, cinematic production, and seamless event experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/services" className="btn-magnetic btn-primary-neon">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn-magnetic">
             START A CONVERSATION

            </Link>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div> */}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto relative">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Our Expertise
            </span>
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-5xl font-bold">
              What We Do
            </AnimatedHeading>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 0.1}>
                <HologramCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  index={index}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        
        <div className="container mx-auto px-6">
          <SectionReveal className="text-center mb-12">
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Proof in Numbers
            </span>
            <AnimatedHeading as="h2" className="font-display text-3xl md:text-4xl font-bold">
              Results That Speak
            </AnimatedHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              From premium campaigns to seamless execution — here’s what we’ve delivered so far.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
              { value: '3', label: 'City Offices' },
            ].map((stat, index) => (
              <SectionReveal key={stat.label} delay={index * 0.1}>
                <div className="glass-panel p-6 rounded-lg neon-border">
                  <div className="font-display text-4xl md:text-5xl font-bold text-primary text-glow mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <AnimatedHeading as="h2" className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Create Momentum?
            </AnimatedHeading>
            <p className="text-muted-foreground text-lg mb-8">
              Let's transform your vision into reality. Book a consultation with our team today.
            </p>
            <Link to="/contact" className="btn-magnetic btn-primary-neon inline-flex">
              Start Your Project
            </Link>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
