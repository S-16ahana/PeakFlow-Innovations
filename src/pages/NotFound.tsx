import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-2xl">
        <div className="relative mb-8">
          <span className="font-display text-[150px] md:text-[200px] font-bold text-primary/10 leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl md:text-8xl font-bold text-primary text-glow">
              404
            </span>
          </div>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground text-lg mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-magnetic btn-primary-neon">
            Return Home
          </Link>
          <Link to="/contact" className="btn-magnetic">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
