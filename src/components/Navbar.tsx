
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            {/* Logo with responsive sizing */}
            <div className="relative h-12 sm:h-14 md:h-16 w-auto">
              <img 
                src="/lovable-uploads/9a6bbaf1-469d-440e-962f-1d156c551215.png" 
                alt="The GymBro Logo" 
                className="h-full w-auto filter drop-shadow-[0_0_5px_rgba(255,128,0,0.3)]" 
              />
            </div>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-white hover:text-gymbro-orange transition-colors duration-300 text-sm xl:text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation using Sheet component for better UX */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-black/20"
                  aria-label="Open Menu"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black p-0 w-full sm:max-w-sm">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-gray-800">
                    <img 
                      src="/lovable-uploads/9a6bbaf1-469d-440e-962f-1d156c551215.png" 
                      alt="The GymBro Logo" 
                      className="h-10 w-auto mx-auto" 
                    />
                  </div>
                  <nav className="flex-1 overflow-auto py-6">
                    <div className="flex flex-col space-y-1">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="text-white hover:text-gymbro-orange hover:bg-gray-900 px-6 py-3 transition-colors"
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
