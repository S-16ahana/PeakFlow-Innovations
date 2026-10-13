import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 md:h-24 flex items-center
          overflow-visible transition-all duration-500
          ${isScrolled ? 'glass-panel' : 'bg-transparent'}
        `}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="relative flex items-center">
            <div className="relative h-12 md:h-16 w-[220px] sm:w-[300px] md:w-[420px] overflow-visible">
              <img
                src="/newlogo.png"
                alt="Peakflow Innovations Logo"
                className="
                  absolute left-0
                  top-1/2 -translate-y-1/2
                  -translate-x-8 md:-translate-x-16
                  h-full w-auto
                  scale-[2.6] sm:scale-[3.6] md:scale-[4.5]
                  origin-left
                  object-contain
                  drop-shadow-[0_0_16px_rgba(0,255,180,0.7)]
                "
              />
            </div>
          </Link>

          {/* CTA Button - Desktop */}
          {/*
          <Link
            to="/contact"
            className="hidden lg:block btn-magnetic text-sm"
          >
            Get Started
          </Link>
          */}

          {/* Burger Menu Button - Always Visible */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-foreground group-hover:bg-primary transition-colors" />
            <span className="w-4 h-0.5 bg-foreground group-hover:bg-primary transition-colors ml-auto" />
            <span className="w-6 h-0.5 bg-foreground group-hover:bg-primary transition-colors" />
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

function NavLink({
  to,
  current,
  children,
}: {
  to: string;
  current: string;
  children: React.ReactNode;
}) {
  const isActive = current === to;

  return (
    <Link
      to={to}
      className={`relative font-body text-sm tracking-wider uppercase transition-colors ${
        isActive
          ? 'text-primary'
          : 'text-foreground hover:text-primary'
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0'
        }`}
      />
    </Link>
  );
}
