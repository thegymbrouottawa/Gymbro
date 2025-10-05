import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Contrôle ouverture du menu mobile
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Détecte si on est sur la page d'accueil
  const isHomePage = location.pathname === "/";

  // Adapte les href en fonction de la route actuelle
  const navLinks = [
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Executive Members", href: isHomePage ? "#executives" : "/#executives" },
    { name: "Podcast", href: isHomePage ? "#podcast" : "/#podcast" },
    { name: "Publication", href: isHomePage ? "#publication" : "/#publication" },
    { name: "Programs", href: isHomePage ? "#programs" : "/#programs" },
    { name: "Trainers", href: isHomePage ? "#trainers" : "/#trainers" },
    { name: "Gallery", href: isHomePage ? "#gallery" : "/#gallery" },
    { name: "Events", href: isHomePage ? "#events" : "/#events" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
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
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-500 hover:text-yellow-400"
                  aria-label="Open Menu"
                  onClick={() => setSheetOpen(true)}
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
                          onClick={() => setSheetOpen(false)} // Ferme menu au clic
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
