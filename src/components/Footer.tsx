const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              The <span className="text-gymbro-orange">GymBro</span>
            </h3>
            <p className="text-gray-300 mb-4">
              The first and only bodybuilding club at the University of Ottawa.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-4 text-center">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="#about"
                className="text-gray-300 hover:text-gymbro-orange transition-colors"
              >
                About Us
              </a>
              <a
                href="#executives"
                className="text-gray-300 hover:text-gymbro-orange transition-colors"
              >
                Executive Members
              </a>
              <a
                href="#podcast"
                className="text-gray-300 hover:text-gymbro-orange transition-colors"
              >
                Podcast
              </a>
              <a
                href="#publication"
                className="text-gray-300 hover:text-gymbro-orange transition-colors"
              >
                Publication
              </a>
              <a
                href="#programs"
                className="text-gray-300 hover:text-gymbro-orange transition-colors"
              >
                Programs
              </a>
            </nav>
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
