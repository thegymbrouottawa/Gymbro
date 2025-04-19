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
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo agrandi */}
        <Link to="/" className="block">
          <img
            src="/lovable-uploads/9a6bbaf1-469d-440e-962f-1d156c551215.png"
            alt="The GymBro Logo"
            className="h-14 w-auto filter drop-shadow-[0_0_5px_rgba(255,128,0,0.3)]"
          />
        </Link>

        {/* Adresse + Icônes groupés */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 text-sm text-gray-300 text-center sm:text-right">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gymbro-orange" />
            <span>85 University Private #7, Ottawa, ON</span>
          </div>
          <div className="flex gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.platform}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gymbro-orange hover:text-white transition"
                aria-label={contact.platform}
              >
                <contact.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Description + Copyright */}
      <div className="max-w-6xl mx-auto px-4 mt-6 text-center text-sm text-gray-400 space-y-2">
        <p>
          <span className="text-white font-semibold">
            The <span className="text-gymbro-orange">GymBro</span>
          </span>{" "}
          — The first and only bodybuilding club at the University of Ottawa.
        </p>
        <p>© {currentYear} The GymBro Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
