import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RugDarkWood from "./pages/RugDarkWood";
import RugLightOak from "./pages/RugLightOak";
import RugConcrete from "./pages/RugConcrete";
import RugMarble from "./pages/RugMarble";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rug-dark-wood" element={<RugDarkWood />} />
          <Route path="/rug-light-oak" element={<RugLightOak />} />
          <Route path="/rug-concrete" element={<RugConcrete />} />
          <Route path="/rug-marble" element={<RugMarble />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
