import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoofSteamCleaning from "./pages/services/RoofSteamCleaning";
import RenderSoftwashing from "./pages/services/RenderSoftwashing";
import DrivewayCleaning from "./pages/services/DrivewayCleaning";
import GutterCleaning from "./pages/services/GutterCleaning";
import PVCWhiteCleaning from "./pages/services/PVCWhiteCleaning";
import WindowCleaning from "./pages/services/WindowCleaning";
import Irvine from "./pages/locations/Irvine";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Pages */}
          <Route path="/services/roof-steam-cleaning" element={<RoofSteamCleaning />} />
          <Route path="/services/render-softwashing" element={<RenderSoftwashing />} />
          <Route path="/services/driveway-cleaning" element={<DrivewayCleaning />} />
          <Route path="/services/gutter-cleaning" element={<GutterCleaning />} />
          <Route path="/services/pvc-white-cleaning" element={<PVCWhiteCleaning />} />
          <Route path="/services/window-cleaning" element={<WindowCleaning />} />
          
          {/* Location Pages */}
          <Route path="/locations/irvine" element={<Irvine />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
