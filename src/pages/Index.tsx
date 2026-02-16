import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProgramsSection from "@/components/ProgramsSection";
import TuitionSection from "@/components/TuitionSection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DifferenceSection />
        <ProgramsSection />
        <TuitionSection />
        <LocationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
