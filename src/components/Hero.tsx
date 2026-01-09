import defaultHeroImage from "@/assets/hero-lanterns.jpg";
import { heroConfig } from "@/lib/settings";
import { useEffect, useState } from "react";
import { ClickableImage } from "./Lightbox";

const floatingPhotos = [
  { src: "/uploads/20251229_151514.jpg", alt: "Travel memory 1", position: "top-12 left-[5%]", delay: "0s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "rotate-3", parallaxSpeed: 0.3 },
  { src: "/uploads/20251229_151640.jpg", alt: "Travel memory 2", position: "top-16 right-[5%]", delay: "1.5s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "-rotate-2", parallaxSpeed: 0.5 },
  { src: "/uploads/20251229_151546.jpg", alt: "Travel memory 3", position: "bottom-32 left-[8%]", delay: "3s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "rotate-2", parallaxSpeed: 0.4 },
  { src: "/uploads/IMG-20251228-WA0020.jpg", alt: "Travel memory 4", position: "bottom-24 right-[8%]", delay: "0.5s", size: "w-24 h-16 md:w-32 md:h-20", rotate: "-rotate-3", parallaxSpeed: 0.35 },
  { src: "/uploads/20251229_151459.jpg", alt: "Travel memory 5", position: "top-1/3 left-1/2 -translate-x-1/2", delay: "2s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "rotate-1", parallaxSpeed: 0.25 },
];

const Hero = () => {
  const { title, year_tag, tagline, hero_image } = heroConfig;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroSrc = hero_image && hero_image.trim().length > 0
    ? hero_image
    : defaultHeroImage;

  return (
    <div className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <ClickableImage
          src={heroSrc}
          alt={tagline || "Vietnam travel hero image"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        {/* Floating Photos with Parallax */}
        {floatingPhotos.map((photo, index) => (
          <div 
            key={index}
            className={`absolute ${photo.position} animate-float`}
            style={{ 
              animationDelay: photo.delay,
              transform: `translateY(${scrollY * photo.parallaxSpeed}px)`
            }}
          >
            <div className={`${photo.size} rounded-lg overflow-hidden shadow-elegant border-2 border-white/80 ${photo.rotate} hover:rotate-0 transition-transform duration-300`}>
              <ClickableImage 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative -mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2 text-shadow-soft">
            {title}
          </h1>
          <p className="text-lg sm:text-xl font-bold text-coral mb-6">
            Caitlyn, Yeshara & Shenara
          </p>
          <div className="inline-block bg-gradient-sunset px-8 py-3 rounded-full shadow-card mb-8">
            <p className="text-xl sm:text-2xl font-semibold text-white">
              {year_tag}
            </p>
          </div>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
