import AnimatedHeading from '@/components/AnimatedHeading';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';

import hologramCard1 from '@/assets/hologram-card-1.png';
import hologramCard2 from '@/assets/hologram-card-2.png';
import hologramCard3 from '@/assets/hologram-card-3.png';
import hologramCard4 from '@/assets/hologram-card-4.png';

const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Strategic Growth',
    image: hologramCard1,
    description: 'Comprehensive digital strategies that amplify your brand presence and drive measurable results.',
    features: [
      'SEO & Content Marketing',
      'Social Media Management',
      'Performance Marketing',
      'Brand Strategy & Positioning',
      'Analytics & Reporting',
      'Email Marketing Automation',
    ],
  },
  {
    id: 'cinematography',
    title: '360° Cinematography',
    subtitle: 'Visual Storytelling',
    image: hologramCard2,
    description: 'Cinematic production that brings your brand story to life with stunning visuals and immersive experiences.',
    features: [
      'Commercial Production',
      'Corporate Videos',
      'Product Photography',
      'Aerial Cinematography',
      'Motion Graphics',
      '360° Virtual Tours',
    ],
  },
  {
    id: 'web-development',
    title: 'Website Development',
    subtitle: 'Digital Experiences',
    image: hologramCard3,
    description: 'Premium web solutions with cutting-edge technology, futuristic design, and seamless user experiences.',
    features: [
      'Custom Web Development',
      'E-commerce Solutions',
      'UI/UX Design',
      'Web Applications',
      'CMS Development',
      'Performance Optimization',
    ],
  },
  {
    id: 'events-ops',
    title: 'Events & Operations',
    subtitle: 'Flawless Execution',
    image: hologramCard4,
    description: 'End-to-end event management with meticulous planning and execution for unforgettable experiences.',
    features: [
      'Corporate Events',
      'Product Launches',
      'Conferences & Summits',
      'Brand Activations',
      'Virtual Events',
      'Venue Management',
    ],
  },
];

export default function Services() { 
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="pt-16 pb-10 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto text-center relative">
          <SectionReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              What We Offer
            </span>
            <AnimatedHeading as="h1" className="font-display text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </AnimatedHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your brand, captivate your audience, 
              and accelerate your growth.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <SectionReveal direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className="relative group">
                    <div className="hologram rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Scan Effect */}
                      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity">
                        <div className="absolute w-full h-0.5 bg-primary animate-scan" />
                      </div>
                    </div>
                    
                    {/* Corner Decorations */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-primary opacity-50" />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-primary opacity-50" />
                  </div>
                </SectionReveal>

                {/* Content */}
                <SectionReveal direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className={index % 2 === 1 ? 'lg:text-right' : ''}>
                    <span className="text-primary text-sm tracking-widest uppercase mb-2 block">
                      {service.subtitle}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className={`grid grid-cols-2 gap-4 mb-8 ${index % 2 === 1 ? 'lg:justify-items-end' : ''}`}>
                      {service.features.map((feature, fIndex) => (
                        <div
                          key={feature}
                          className={`flex items-center gap-3 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                          style={{ animationDelay: `${fIndex * 0.1}s` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary neon-glow flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="btn-magnetic inline-flex"
                    >
                      Get Started
                    </Link>
                  </div>
                </SectionReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="container mx-auto relative">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              How We Work
            </span>
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-5xl font-bold">
              Our Process
            </AnimatedHeading>
          </SectionReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Deep dive into your brand, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'Develop comprehensive plans tailored to your objectives' },
              { step: '03', title: 'Creation', description: 'Execute with precision and creative excellence' },
              { step: '04', title: 'Growth', description: 'Measure, optimize, and scale for continuous improvement' },
            ].map((item, index) => (
              <SectionReveal key={item.step} delay={index * 0.15}>
                <div className="glass-panel p-8 rounded-lg text-center hover:neon-border transition-all duration-500 group relative overflow-hidden">
                  {/* Background Number */}
                  <div className="absolute -right-4 -top-4 font-display text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </div>
                  
                  <div className="relative">
                    <div className="font-display text-4xl font-bold text-primary mb-4 text-glow">
                      {item.step}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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
              Let's Build Something Extraordinary
            </AnimatedHeading>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to transform your brand? Let's discuss how we can help you achieve your goals.
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
