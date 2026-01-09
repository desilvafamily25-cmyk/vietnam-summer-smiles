import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, Star, DollarSign } from "lucide-react";
import { getDayByNumber } from "@/lib/days";
import { ClickableImage } from "@/components/Lightbox";

const DayPost = () => {
  const { dayId } = useParams();
  const dayNumber = Number(dayId);

  const day = Number.isFinite(dayNumber)
    ? getDayByNumber(dayNumber)
    : undefined;

  // fallback structure (keeps UI stable even if JSON missing)
  const dayData = day || {
    day_number: dayNumber || 0,
    title: `Day ${dayId}`,
    date: "",
    city: "",
    hero_image: "",
    hero_caption: "",
    morning: "",
    morning_photos: [],
    afternoon: "",
    afternoon_photos: [],
    evening: "",
    evening_photos: [],
    kids_rating: "",
    costs: "",
    notes: "",
    gallery: []
  };

  const hasMorningPhotos = dayData.morning_photos?.length > 0;
  const hasAfternoonPhotos = dayData.afternoon_photos?.length > 0;
  const hasEveningPhotos = dayData.evening_photos?.length > 0;
  const hasGallery = dayData.gallery?.length > 0;

  return (
    <div className="min-h-screen bg-gradient-beach">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Button */}
        <Link to="/daily-blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Days
          </Button>
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <div className="bg-gradient-sunset rounded-3xl p-8 text-white shadow-card mb-6">
            <h1 className="text-5xl font-bold mb-3">
              {dayData.title}
            </h1>
            {dayData.date && (
              <p className="text-2xl opacity-90">{dayData.date}</p>
            )}
            {dayData.city && (
              <p className="text-xl opacity-80 mt-2">{dayData.city}</p>
            )}
          </div>

          {/* Hero Photo */}
          <div className="relative aspect-video bg-gradient-to-br from-sky-blue to-turquoise rounded-3xl overflow-hidden shadow-card flex items-center justify-center">
            {dayData.hero_image ? (
              <ClickableImage
                src={dayData.hero_image}
                alt={dayData.hero_caption || dayData.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Camera className="h-24 w-24 text-white opacity-50" />
                <p className="absolute bottom-8 text-white text-lg font-medium">
                  Hero photo to be uploaded
                </p>
              </>
            )}
          </div>

          {dayData.hero_caption && (
            <p className="text-center text-muted-foreground mt-4">
              {dayData.hero_caption}
            </p>
          )}
        </div>

        {/* Morning Section */}
        <Card className="p-8 mb-8 border-2 border-sunshine/20 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-sunshine/20 p-3 rounded-full">
              <span className="text-2xl">🌅</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Morning</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            {dayData.morning || "Morning adventures to be added..."}
          </p>

          <div className="bg-muted/30 rounded-2xl p-6 min-h-[200px]">
          {hasMorningPhotos ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {dayData.morning_photos!.map((p, idx) => {
                  const src = typeof p === 'string' ? p : p.image;
                  return (
                    <ClickableImage
                      key={idx}
                      src={src}
                      alt={`Morning photo ${idx + 1}`}
                      className="w-full h-36 object-cover rounded-xl"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Morning photos to be added</p>
              </div>
            )}
          </div>
        </Card>

        {/* Afternoon Section */}
        <Card className="p-8 mb-8 border-2 border-coral/20 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-coral/20 p-3 rounded-full">
              <span className="text-2xl">☀️</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Afternoon</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            {dayData.afternoon || "Afternoon fun to be added..."}
          </p>

          <div className="bg-muted/30 rounded-2xl p-6 min-h-[200px]">
            {hasAfternoonPhotos ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {dayData.afternoon_photos!.map((p, idx) => {
                  const src = typeof p === 'string' ? p : p.image;
                  return (
                    <ClickableImage
                      key={idx}
                      src={src}
                      alt={`Afternoon photo ${idx + 1}`}
                      className="w-full h-36 object-cover rounded-xl"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Afternoon photos to be added</p>
              </div>
            )}
          </div>
        </Card>

        {/* Evening Section */}
        <Card className="p-8 mb-8 border-2 border-turquoise/20 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-turquoise/20 p-3 rounded-full">
              <span className="text-2xl">🌙</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Evening</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            {dayData.evening || "Evening memories to be added..."}
          </p>

          <div className="bg-muted/30 rounded-2xl p-6 min-h-[200px]">
            {hasEveningPhotos ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {dayData.evening_photos!.map((p, idx) => {
                  const src = typeof p === 'string' ? p : p.image;
                  return (
                    <ClickableImage
                      key={idx}
                      src={src}
                      alt={`Evening photo ${idx + 1}`}
                      className="w-full h-36 object-cover rounded-xl"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Evening photos to be added</p>
              </div>
            )}
          </div>
        </Card>

        {/* Kids Rating + Daily Costs */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-sunshine" />
              <h3 className="text-2xl font-bold">Kids Rating</h3>
            </div>
            <p className="text-muted-foreground">
              {dayData.kids_rating || "To be added..."}
            </p>
          </Card>

          <Card className="p-6 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6 text-coral" />
              <h3 className="text-2xl font-bold">Daily Costs</h3>
            </div>
            <p className="text-muted-foreground">
              {dayData.costs || "To be added..."}
            </p>
          </Card>
        </div>

        {/* Notes & Reflections */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-sand to-background border-2 border-primary/10">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Daily Notes & Reflections
          </h3>
          <p className="text-lg text-muted-foreground">
            {dayData.notes || "Daily reflections to be added..."}
          </p>
        </Card>

        {/* Full Photo Dump */}
        <Card className="p-8 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Full Photo Dump</h2>
          </div>

          <div className="bg-muted/30 rounded-2xl p-6 min-h-[300px]">
            {hasGallery ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {dayData.gallery!.map((img, idx) => {
                  const src = typeof img === 'string' ? img : img.image;
                  return (
                    <ClickableImage
                      key={idx}
                      src={src}
                      alt={`Gallery photo ${idx + 1}`}
                      className="w-full h-36 object-cover rounded-xl"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground text-center">
                  Photo gallery will be displayed here
                  <br />
                  <span className="text-sm">(Masonry grid layout)</span>
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DayPost;
