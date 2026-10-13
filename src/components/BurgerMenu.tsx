import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'The Work', path: '/work' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact Us', path: '/contact' },
];

export default function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;
    const items = itemsRef.current;
    const info = infoRef.current;

    if (!menu || !overlay) return;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      const tl = gsap.timeline();

      tl.to(overlay, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      })
        .to(menu, {
          x: 0,
          duration: 0.5,
          ease: 'power3.out',
        }, '-=0.2')
        .fromTo(
          items,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .fromTo(
          info,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
          '-=0.2'
        );
    } else {
      // Restore body scroll
      document.body.style.overflow = '';

      const tl = gsap.timeline();

      tl.to(items, {
        x: 50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.03,
      })
        .to(info, {
          y: 30,
          opacity: 0,
          duration: 0.2,
        }, '-=0.1')
        .to(menu, {
          x: '100%',
          duration: 0.4,
          ease: 'power3.in',
        })
        .to(overlay, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.3,
        }, '-=0.2');
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm opacity-0 pointer-events-none"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-4/5 md:w-1/2 h-screen z-[101] translate-x-full"
      >
        {/* Glass Background */}
        <div className="absolute inset-0 glass-panel neon-border" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center group"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground rotate-45 group-hover:bg-primary transition-colors" />
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground -rotate-45 group-hover:bg-primary transition-colors" />
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 mt-20">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                onClick={onClose}
                className="group relative font-display text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            <div className="space-y-2 text-muted-foreground">
              <a
                href="mailto:hello@peakflow.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@peakflow.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
