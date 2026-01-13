import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Employers from "./pages/Employers";
import JobSeekers from "./pages/JobSeekers";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Service pages
import ContractStaffing from "./pages/services/ContractStaffing";
import PermanentStaffing from "./pages/services/PermanentStaffing";
import ExecutiveSearch from "./pages/services/ExecutiveSearch";
import PayrollServices from "./pages/services/PayrollServices";
import HRConsulting from "./pages/services/HRConsulting";

// Industry pages
import InformationTechnology from "./pages/industries/InformationTechnology";
import Healthcare from "./pages/industries/Healthcare";
import RealEstate from "./pages/industries/RealEstate";
import Corporate from "./pages/industries/Corporate";
import Manufacturing from "./pages/industries/Manufacturing";

// Other pages
import Compliance from "./pages/Compliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Service pages */}
          <Route path="/services/contract-staffing" element={<ContractStaffing />} />
          <Route path="/services/permanent-staffing" element={<PermanentStaffing />} />
          <Route path="/services/executive-search" element={<ExecutiveSearch />} />
          <Route path="/services/payroll-services" element={<PayrollServices />} />
          <Route path="/services/hr-consulting" element={<HRConsulting />} />
          
          {/* Industry pages */}
          <Route path="/industries/information-technology" element={<InformationTechnology />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/corporate" element={<Corporate />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          
          {/* Other pages */}
          <Route path="/compliance" element={<Compliance />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
