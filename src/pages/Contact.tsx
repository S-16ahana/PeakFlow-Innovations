import { useState } from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import SectionReveal from '@/components/SectionReveal';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter } from 'lucide-react';

const offices = [
  {
    city: 'Hubli',
    code: 'HBX',
    address: 'Tech Park, Vidyanagar',
    phone: '+91 98765 43210',
  },
  {
    city: 'Bangalore',
    code: 'BLR',
    address: 'Koramangala, 5th Block',
    phone: '+91 98765 43211',
  },
  {
    city: 'Goa',
    code: 'GOX',
    address: 'Panjim, Fontainhas',
    phone: '+91 98765 43212',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto text-center relative">
          <SectionReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <AnimatedHeading as="h1" className="font-display text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </AnimatedHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to create momentum for your brand? Let's start a conversation 
              about your vision and how we can bring it to life.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SectionReveal direction="left">
              <div className="glass-panel p-8 md:p-12 rounded-2xl neon-border">
                <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg input-neon font-body"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg input-neon font-body"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm text-muted-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg input-neon font-body"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm text-muted-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg input-neon font-body bg-input"
                      >
                        <option value="">Select a service</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="cinematography">Cinematography</option>
                        <option value="web">Web Development</option>
                        <option value="events">Events & Operations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg input-neon font-body resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-magnetic btn-primary-neon w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </SectionReveal>

            {/* Contact Info */}
            <SectionReveal direction="right">
              <div className="space-y-8">
                {/* Quick Contact */}
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6">Quick Contact</h2>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@peakflow.com"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">Email</span>
                        <span className="text-foreground">hello@peakflow.com</span>
                      </div>
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">Phone</span>
                        <span className="text-foreground">+91 98765 43210</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6">Our Offices</h2>
                  <div className="grid gap-4">
                    {offices.map((office) => (
                      <div
                        key={office.code}
                        className="glass-panel p-6 rounded-lg hover:neon-border transition-all duration-500 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-display font-bold">
                            {office.code}
                          </div>
                          <div>
                            <h3 className="font-display font-bold group-hover:text-primary transition-colors">
                              {office.city}
                            </h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                              <MapPin className="w-3 h-3" />
                              {office.address}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                              <Phone className="w-3 h-3" />
                              {office.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6">Follow Us</h2>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, label: 'LinkedIn' },
                      { icon: Instagram, label: 'Instagram' },
                      { icon: Twitter, label: 'Twitter' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="py-20 text-center">
        <SectionReveal>
          <div className="max-w-2xl mx-auto px-6">
            <p className="font-display text-2xl md:text-3xl italic text-muted-foreground mb-4">
              "Hope to Work With You Soon"
            </p>
            <div className="font-display text-4xl text-primary text-glow">
              — PeakFlow Team
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
