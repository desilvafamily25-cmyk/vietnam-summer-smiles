import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mountain, Calendar, DollarSign, AlertCircle } from "lucide-react";

const Hanoi = () => {
  const days = [
    { day: 8, date: "3 Jan 2026", title: "Halong Bay Cruise" },
    { day: 9, date: "4 Jan 2026", title: "Kayaking & Spa Day" },
    { day: 10, date: "5 Jan 2026", title: "Pottery Workshop" },
    { day: 11, date: "6 Jan 2026", title: "Pottery & Water Puppets" },
  ];

  return (
    <div className="min-h-screen bg-gradient-beach">
      {/* Header */}
      <div className="bg-gradient-to-br from-sunshine/20 to-sunshine/5 py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-sunshine/30">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 hover:bg-sunshine/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <Mountain className="h-16 w-16 text-sunshine" />
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Hanoi
            </h1>
          </div>
          
          <p className="text-center text-xl text-muted-foreground">
            Vietnam's charming capital city
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hotel Info */}
        <div className="space-y-6 mb-12">
          <Card className="p-8 bg-card shadow-card border-2 border-sunshine/20">
            <div className="flex items-center gap-4 mb-6">
              <Mountain className="h-8 w-8 text-sunshine" />
              <h2 className="text-3xl font-bold">Meritel Hanoi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-turquoise" />
                  <span className="font-semibold text-lg">Dates</span>
                </div>
                <p className="text-muted-foreground">2 → 3 January 2026</p>
                <p className="text-muted-foreground">4 → 7 January 2026</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5 text-coral" />
                  <span className="font-semibold text-lg">Price</span>
                </div>
                <p className="text-lg text-muted-foreground">2-3 Jan: <span className="text-xl font-bold text-sunshine">AUD 303</span></p>
                <p className="text-lg text-muted-foreground">4-7 Jan: <span className="text-xl font-bold text-sunshine">AUD 760</span></p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-amber-50 border-2 border-amber-300">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-amber-900">Free Night - 3 January</h3>
                <p className="text-amber-800">Accommodation for this night is yet to be decided. Stay tuned for updates!</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Daily Posts */}
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
          Our Hanoi Adventures
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((day) => (
            <Link key={day.day} to={`/day/${day.day}`}>
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card h-full group border-2 border-sunshine/10">
                <div className="text-white rounded-2xl p-4 mb-4 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-sunshine to-coral">
                  <p className="text-sm font-semibold opacity-90">Day {day.day}</p>
                  <p className="text-2xl font-bold">{day.date}</p>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {day.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Click to view photos and memories
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hanoi;
