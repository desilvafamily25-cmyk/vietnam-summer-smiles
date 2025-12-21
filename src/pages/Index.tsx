import Hero from "@/components/Hero";
import TripOverview from "@/components/TripOverview";
import CityNavigation from "@/components/CityNavigation";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TripOverview />
      <CityNavigation />
      
      {/* Flipbook Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-coral/20 text-coral px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Our Travel Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Flip Through Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our beautifully curated travel flipbook featuring all the magical moments from Vietnam.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-elegant overflow-hidden border border-border/50">
            <iframe 
              allowFullScreen={true}
              src="https://designrr.page/?id=596585&token=3928259773&h=2228" 
              height="600" 
              width="100%" 
              frameBorder="0"
              className="w-full"
              title="Vietnam Travel Flipbook"
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-ocean text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-semibold mb-2">Vietnam With The Girls 2025/26</p>
          <p className="text-white/80">Creating memories, one day at a time ✨</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
