import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, createContext, useContext, ReactNode, useCallback } from "react";

type LightboxContextType = {
  openLightbox: (src: string, alt?: string) => void;
};

const LightboxContext = createContext<LightboxContextType | null>(null);

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
};

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const openLightbox = useCallback((src: string, alt?: string) => {
    setImageSrc(src);
    setImageAlt(alt || "Photo");
    setIsOpen(true);
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </LightboxContext.Provider>
  );
};

type ClickableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ClickableImage = ({ src, alt, className = "" }: ClickableImageProps) => {
  const { openLightbox } = useLightbox();

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={() => openLightbox(src, alt)}
    />
  );
};
