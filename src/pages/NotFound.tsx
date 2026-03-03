import { Terminal, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 p-6 rounded-xl bg-card border border-border inline-block">
          <Terminal className="text-primary mx-auto" size={48} />
        </div>

        <div className="font-mono mb-6">
          <p className="text-primary text-sm mb-2">$ curl -I {location.pathname}</p>
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
          <p className="text-muted-foreground">
            <span className="text-destructive">ERROR:</span> Route not found in deployment manifest.
          </p>
        </div>

        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_hsl(160_100%_50%_/_0.3)] transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;