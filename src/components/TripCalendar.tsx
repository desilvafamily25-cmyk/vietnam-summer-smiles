import { Calendar } from "lucide-react";

const TripCalendar = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-turquoise/20 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Trip Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Vietnam Trip Calendar
          </h2>
          <p className="text-muted-foreground">
            December 2025 – January 2026
          </p>
        </div>
        
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border/50">
          <div className="aspect-[4/3] md:aspect-[16/10] w-full">
            <iframe 
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Australia%2FMelbourne&showPrint=0&src=YzNmMDZkZGQ1YTFiNjVmNGI1ZjZiY2I0OTY1YjgyY2Y3NGE4NjcxYzk0Yzk5NTdmYzg4NWRjZDJiNDQyMTAxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23d81b60"
              className="w-full h-full border-0"
              title="Vietnam Trip Calendar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripCalendar;
