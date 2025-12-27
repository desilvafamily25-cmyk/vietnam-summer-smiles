import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Compass, Plane, BookOpen } from "lucide-react";

interface PasswordGateProps {
  onAccessGranted: () => void;
}

const VALID_PASSWORDS = ["yeshara", "shenara", "caitlyn"];

const PasswordGate = ({ onAccessGranted }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedPassword = password.trim().toLowerCase();
    
    if (VALID_PASSWORDS.includes(normalizedPassword)) {
      setError(false);
      setIsExiting(true);
      setTimeout(() => {
        localStorage.setItem("travel-journal-access", "granted");
        onAccessGranted();
      }, 600);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  useEffect(() => {
    // Add noindex meta tag
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-sky-blue/30 via-background to-sand/50 transition-all duration-600 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Compass - top left */}
        <div className="absolute top-[15%] left-[10%] animate-float opacity-20">
          <Compass className="w-16 h-16 text-primary" style={{ animationDelay: '0s' }} />
        </div>
        
        {/* Map pin - top right */}
        <div className="absolute top-[20%] right-[15%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <MapPin className="w-12 h-12 text-coral" />
        </div>
        
        {/* Plane - bottom left */}
        <div className="absolute bottom-[25%] left-[12%] animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
          <Plane className="w-14 h-14 text-turquoise rotate-12" />
        </div>
        
        {/* Book - bottom right */}
        <div className="absolute bottom-[20%] right-[10%] animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
          <BookOpen className="w-14 h-14 text-sunshine" />
        </div>

        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-card border border-border/30 p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-ocean mb-6">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Welcome to our travel journal
            </h1>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              This space is shared with people we've given access to.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground text-center">
                Please enter the password to continue.
              </p>
              
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`h-12 text-center text-lg bg-background/50 border-border/50 focus:border-primary transition-all duration-300 ${
                  error ? 'animate-shake border-destructive/50' : ''
                }`}
                autoFocus
              />
              
              {/* Error message */}
              <div className={`h-6 flex items-center justify-center transition-all duration-300 ${
                error ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="text-sm text-destructive">
                  That password isn't recognised.
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base bg-gradient-ocean hover:opacity-90 transition-opacity"
            >
              Continue →
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
