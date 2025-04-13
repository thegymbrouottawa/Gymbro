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
    <div
      className="hero-section min-h-[90vh] sm:min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://iili.io/3l27IQj.jpg')",
      }}
    >
      <div className="container mx-auto text-center text-white pt-16 sm:pt-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fadeIn">
          <span className="text-yellow-400">The GymBro</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-6 sm:mb-8 animate-fadeIn">
          The first and only bodybuilding club at the University of Ottawa
          dedicated to making fitness accessible to all students.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fadeIn">
          <Button
            onClick={scrollToAbout}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold touch-target"
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            className="bg-yellow-400 hover:bg-yellow-300 text-black touch-target mt-3 sm:mt-0"
            asChild
          >
            <a href="#programs">Join Us</a>
          </Button>
        </div>
        <div className="mt-12 sm:mt-16 animate-bounce hidden sm:block">
          <button onClick={scrollToAbout} className="text-white touch-target">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
