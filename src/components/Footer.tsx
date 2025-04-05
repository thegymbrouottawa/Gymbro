
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              The <span className="text-gymbro-orange">GymBro</span>
            </h3>
            <p className="text-gray-300 mb-4">
              The first and only bodybuilding club at the University of Ottawa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gymbro-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gymbro-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gymbro-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-gymbro-orange transition-colors">About Us</a>
              <a href="#executives" className="text-gray-300 hover:text-gymbro-orange transition-colors">Executive Members</a>
              <a href="#podcast" className="text-gray-300 hover:text-gymbro-orange transition-colors">The GymBro Podcast</a>
              <a href="#publication" className="text-gray-300 hover:text-gymbro-orange transition-colors">The GymBro Publication</a>
              <a href="#programs" className="text-gray-300 hover:text-gymbro-orange transition-colors">Our Programs</a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">University of Ottawa</p>
            <p className="text-gray-300 mb-2">Ottawa, ON</p>
            <p className="text-gray-300">contact@thegymbro.ca</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} The GymBro Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
