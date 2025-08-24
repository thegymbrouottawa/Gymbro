import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Executive Members", href: "#executives" },
    { name: "Podcast", href: "#podcast" },
    { name: "Publication", href: "#publication" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div
        className={`transition-all duration-300 mx-auto mt-4 rounded-lg px-6 ${
          isScrolled ? "shadow-lg py-3" : "shadow-md py-4"
        } bg-white max-w-[90%] lg:max-w-6xl`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/9a6bbaf1-469d-440e-962f-1d156c551215.png"
              alt="The GymBro Logo"
              className="h-28 w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 text-base font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-500 hover:text-yellow-400"
                  aria-label="Open Menu"
                >
                  <Menu size={26} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white p-0 w-full sm:max-w-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex flex-col items-center">
                      <img
                        src="/lovable-uploads/9a6bbaf1-469d-440e-962f-1d156c551215.png"
                        alt="The GymBro Logo"
                        className="h-20 w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
                      />
                      <span className="text-yellow-500 text-lg font-semibold mt-2">
                        The GymBro
                      </span>
                    </div>
                  </div>
                  <nav className="flex-1 overflow-auto py-8 px-6">
                    <div className="flex flex-col space-y-3">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="text-yellow-500 hover:text-yellow-400 px-4 py-3 rounded-md transition-colors font-semibold text-base"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
