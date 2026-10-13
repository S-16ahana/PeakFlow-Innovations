import { useState } from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import SectionReveal from '@/components/SectionReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import testimonial1 from '@/assets/testimonial-user-1.jpg';
import testimonial2 from '@/assets/testimonial-user-2.jpg';
import testimonial3 from '@/assets/testimonial-user-3.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'CEO, TechVentures India',
    image: testimonial1,
    quote: 'PeakFlow transformed our digital presence completely. Their strategic approach to marketing combined with stunning visuals helped us achieve a 300% increase in brand awareness within just 6 months.',
    signature: 'R. Sharma',
  },
  {
    id: 2,
    name: 'Priya Menon',
    role: 'Marketing Director, Luxe Hotels',
    image: testimonial2,
    quote: 'Working with PeakFlow was an absolute pleasure. They understood our vision perfectly and delivered a campaign that exceeded all expectations. Their attention to detail is unmatched.',
    signature: 'P. Menon',
  },
  {
    id: 3,
    name: 'Arjun Patel',
    role: 'Founder, InnovateTech',
    image: testimonial3,
    quote: 'The website and branding PeakFlow created for us positioned us as industry leaders from day one. Their creative team truly understands how to create impact through design.',
    signature: 'A. Patel',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto text-center relative">
          <SectionReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Client Stories
            </span>
            <AnimatedHeading as="h1" className="font-display text-4xl md:text-6xl font-bold mb-6">
              Testimonials
            </AnimatedHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from the brands we've helped transform. Their success is our greatest achievement.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="glass-panel rounded-2xl p-8 md:p-12 neon-border">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <div className="relative">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden neon-border">
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center neon-glow">
                        <Quote className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <blockquote className="text-xl md:text-2xl font-body leading-relaxed mb-8">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-primary">
                          {testimonials[activeIndex].name}
                        </h3>
                        <p className="text-muted-foreground">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>

                      {/* Signature */}
                      <div className="font-display text-3xl italic text-primary/50">
                        {testimonials[activeIndex].signature}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex
                          ? 'bg-primary w-8 neon-glow'
                          : 'bg-muted hover:bg-muted-foreground'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="container mx-auto relative">
          <SectionReveal className="text-center mb-16">
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-5xl font-bold">
              More Success Stories
            </AnimatedHeading>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <SectionReveal key={`${testimonial.id}-${index}`} delay={index * 0.1}>
                <div className="glass-panel p-6 rounded-lg h-full hover:neon-border transition-all duration-500 group">
                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  <p className="text-muted-foreground mb-6 line-clamp-4 group-hover:text-foreground transition-colors">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '85%', label: 'Repeat Clients' },
              { value: '150+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <SectionReveal key={stat.label} delay={index * 0.1}>
                <div className="p-6">
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
    </main>
  );
}
