import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <div className="relative w-40 sm:w-44 md:w-48 flex items-center justify-start -ml-3 sm:-ml-4" style={{ height: '5rem' }}>
                  <img 
                    src="/newlogo.png" 
                    alt="Peakflow Innovations Logo"
                    className="
                      w-full h-auto
                      object-contain
                      drop-shadow-[0_0_40px_rgba(0,255,180,0.7)]
                    "
                  />
                </div>
              </Link>
              <p className="text-muted-foreground mb-6">
                We don't create noise. We create momentum.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Services', path: '/services' },
                  { label: 'Work', path: '/work' },
                  { label: 'Testimonials', path: '/testimonials' },
                  { label: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors underline-reveal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'Digital Marketing',
                  'Cinematography',
                  'Web Development',
                  'Events & Operations',
                  'Brand Strategy',
                  'Social Media',
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@peakflow.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    hello@peakflow.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 98765 43210
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h5 className="font-body text-sm text-muted-foreground mb-3">Offices</h5>
                <p className="text-sm text-muted-foreground">
                  Hubli • Bangalore • Goa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PeakFlow Innovations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-panel neon-border flex items-center justify-center hover:bg-primary/10 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary" />
      </button>
    </footer>
  );
}
