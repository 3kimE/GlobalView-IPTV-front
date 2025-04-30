
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Channels from "./pages/Channels";
import Live from "./pages/Live";
import PricingPage from "./pages/PricingPage";
import Movies from "./pages/Movies";
import Sports from "./pages/Sports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/live" element={<Live />} />
        <Route path="/live/:channelId" element={<Live />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
