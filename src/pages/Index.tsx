
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExecutivesSection from "@/components/ExecutivesSection";
import PodcastSection from "@/components/PodcastSection";
import PublicationSection from "@/components/PublicationSection";
import ProgramsSection from "@/components/ProgramsSection";
import TrainersSection from "@/components/TrainersSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExecutivesSection />
      <PodcastSection />
      <PublicationSection />
      <ProgramsSection />
      <TrainersSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
