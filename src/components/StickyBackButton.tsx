import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";

const StickyBackButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link to="/" className="fixed bottom-6 right-6 z-50">
      <Button 
        className="rounded-full shadow-elegant bg-gradient-sunset hover:opacity-90 transition-opacity"
        size="lg"
      >
        <Home className="w-5 h-5 mr-2" />
        Home
      </Button>
    </Link>
  );
};

export default StickyBackButton;
