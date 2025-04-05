
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn">
          The <span className="text-gymbro-orange">GymBro</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fadeIn">
          The first and only bodybuilding club at the University of Ottawa dedicated to making fitness accessible to all students.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
          <Button 
            onClick={scrollToAbout} 
            className="bg-gymbro-orange hover:bg-gymbro-orange/90 text-white font-bold"
          >
            Learn More
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black"
            asChild
          >
            <a href="#programs">Join Us</a>
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <button onClick={scrollToAbout} className="text-white">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
