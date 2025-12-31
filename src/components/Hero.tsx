import defaultHeroImage from "@/assets/hero-lanterns.jpg";
import { heroConfig } from "@/lib/settings";

const floatingPhotos = [
  { src: "/uploads/20251229_151514.jpg", alt: "Travel memory 1", position: "top-16 left-4 md:left-12", delay: "0s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "rotate-3" },
  { src: "/uploads/20251229_151640.jpg", alt: "Travel memory 2", position: "top-24 right-4 md:right-16", delay: "1.5s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "-rotate-2" },
  { src: "/uploads/20251229_151546.jpg", alt: "Travel memory 3", position: "bottom-40 left-8 md:left-24", delay: "3s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "rotate-2" },
  { src: "/uploads/IMG-20251228-WA0020.jpg", alt: "Travel memory 4", position: "bottom-48 right-6 md:right-20", delay: "0.5s", size: "w-24 h-16 md:w-32 md:h-20", rotate: "-rotate-3" },
  { src: "/uploads/20251229_151459.jpg", alt: "Travel memory 5", position: "top-40 left-1/2 -translate-x-1/2 md:left-1/3", delay: "2s", size: "w-20 h-24 md:w-28 md:h-32", rotate: "rotate-1" },
];

const Hero = () => {
  const { title, year_tag, tagline, hero_image } = heroConfig;

  const heroSrc = hero_image && hero_image.trim().length > 0
    ? hero_image
    : defaultHeroImage;

  return (
    <div className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img
          src={heroSrc}
          alt={tagline || "Vietnam travel hero image"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        {/* Floating Photos */}
        {floatingPhotos.map((photo, index) => (
          <div 
            key={index}
            className={`absolute ${photo.position} animate-float`}
            style={{ animationDelay: photo.delay }}
          >
            <div className={`${photo.size} rounded-lg overflow-hidden shadow-elegant border-2 border-white/80 ${photo.rotate} hover:rotate-0 transition-transform duration-300`}>
              <img 
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-shadow-soft">
            {title}
          </h1>
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
