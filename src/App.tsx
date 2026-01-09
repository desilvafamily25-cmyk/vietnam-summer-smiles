import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HCMC from "./pages/HCMC";
import HoiAn from "./pages/HoiAn";
import Hanoi from "./pages/Hanoi";
import DailyBlog from "./pages/DailyBlog";
import DayPost from "./pages/DayPost";
import NotFound from "./pages/NotFound";
import PasswordGate from "./components/PasswordGate";
import { LightboxProvider } from "./components/Lightbox";
import StickyBackButton from "./components/StickyBackButton";

const queryClient = new QueryClient();

const App = () => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const access = localStorage.getItem("travel-journal-access");
    setHasAccess(access === "granted");
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  // Show nothing while checking localStorage
  if (hasAccess === null) {
    return null;
  }

  // Show password gate if no access
  if (!hasAccess) {
    return <PasswordGate onAccessGranted={handleAccessGranted} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LightboxProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/hcmc" element={<HCMC />} />
              <Route path="/hoi-an" element={<HoiAn />} />
              <Route path="/hanoi" element={<Hanoi />} />
              <Route path="/daily-blog" element={<DailyBlog />} />
              <Route path="/day/:dayId" element={<DayPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <StickyBackButton />
          </BrowserRouter>
        </LightboxProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
