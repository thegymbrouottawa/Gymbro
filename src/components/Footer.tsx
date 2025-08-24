import {
  Instagram,
  Linkedin,
  Link as LinkIcon,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contacts = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/uottawagymbroclubb/?igshid=NTc4MTIwNjQ2YQ%3D%3D",
      icon: Instagram,
    },
    {
      platform: "LinkedIn",
      url: "https://ca.linkedin.com/company/the-gymbro",
      icon: Linkedin,
    },
    {
      platform: "Linktree",
      url: "https://linktr.ee/the_gymbro",
      icon: LinkIcon,
    },
    {
      platform: "Email",
      url: "mailto:Info.gymbro2023@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-neutral-100 py-6 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-[0_0_25px_rgba(0,0,0,0.3)] rounded-lg px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-sans">
        {/* Colonne Gauche : Texte, Adresse, Réseaux */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            <span className="text-yellow-500 font-bold">The GymBro</span> — The
            first and only bodybuilding club at the University of Ottawa.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 text-sm">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>85 University Private #7, Ottawa, ON</span>
          </div>
          <div className="flex justify-center md:justify-start gap-5 pt-2">
            {contacts.map((contact) => (
              <a
                key={contact.platform}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                aria-label={contact.platform}
              >
                <contact.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="text-gray-500 text-xs mt-6 md:mt-10">
            © {currentYear} The GymBro Club. All rights reserved.
          </div>
        </div>

        {/* Colonne Droite : Logo */}
        <div className="flex justify-center md:justify-end">
          <Link to="/" className="block">
            <img
              src="/lovable-uploads/9a6bbaf1-469d-440e-962f-1d156c551215.png"
              alt="The GymBro Logo"
              className="h-48 w-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
