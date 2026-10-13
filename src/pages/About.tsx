import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import SectionReveal from '@/components/SectionReveal';

import aboutTeam from '@/assets/about-team.jpg';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries and embrace cutting-edge solutions to deliver exceptional results.',
  },
  {
    title: 'Excellence',
    description: 'Every project receives our complete dedication to quality and attention to detail.',
  },
  {
    title: 'Integrity',
    description: 'We build lasting relationships through transparency, honesty, and mutual respect.',
  },
  {
    title: 'Impact',
    description: 'We measure our success by the tangible growth we create for our partners.',
  },
];

const timeline = [
  { year: '2019', title: 'Founded', description: 'Started with a vision to transform brand experiences' },
  { year: '2020', title: 'First 10 Clients', description: 'Expanded our portfolio with diverse industries' },
  { year: '2021', title: 'Team Expansion', description: 'Grew to 25+ creative professionals' },
  { year: '2022', title: 'Multi-City Presence', description: 'Opened offices in Bangalore and Goa' },
  { year: '2023', title: '100+ Projects', description: 'Milestone of 100 successful project deliveries' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as a top creative agency in India' },
];

export default function About() {
  const pinnedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned section animation
      if (pinnedRef.current) {
        gsap.fromTo(
          pinnedRef.current.querySelectorAll('.timeline-item'),
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.3,
            scrollTrigger: {
              trigger: pinnedRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
                About Us
              </span>
              <AnimatedHeading as="h1" className="font-display text-4xl md:text-6xl font-bold mb-6">
                We Build Brands That Move Markets
              </AnimatedHeading>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                PeakFlow Innovations is a full-service creative agency specializing in digital marketing, 
                cinematic production, and event operations. We partner with ambitious brands to create 
                experiences that captivate audiences and drive measurable growth.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a passion for excellence, our team combines strategic thinking with 
                creative execution to deliver results that exceed expectations.
              </p>
            </SectionReveal>

            <SectionReveal direction="right" className="relative">
              <div className="relative rounded-lg overflow-hidden neon-border">
                <img
                  src={aboutTeam}
                  alt="PeakFlow Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-lg neon-glow">
                <div className="font-display text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Our Mission
            </span>
            <blockquote className="font-display text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              "To empower brands with 
              <span className="text-primary text-glow"> momentum </span>
              that transforms markets and 
              <span className="text-primary text-glow"> inspires </span>
              audiences worldwide."
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Our Values
            </span>
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-5xl font-bold">
              What Drives Us
            </AnimatedHeading>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 0.1}>
                <div className="glass-panel p-8 rounded-lg h-full hover:neon-border transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <span className="font-display text-xl font-bold text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={pinnedRef} className="section-padding relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto relative">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Our Journey
            </span>
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-5xl font-bold">
              The PeakFlow Story
            </AnimatedHeading>
          </SectionReveal>

          <div className="relative pl-10 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`timeline-item relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:order-2'}`}>
                    <div className="glass-panel p-6 rounded-lg inline-block hover:neon-border transition-all duration-500">
                      <span className="font-display text-3xl font-bold text-primary">{item.year}</span>
                      <h3 className="font-display text-xl font-bold mt-2">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4">
                    <div className="w-full h-full rounded-full bg-primary neon-glow" />
                  </div>
                  
                  <div className={index % 2 === 0 ? 'md:order-2' : ''} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
