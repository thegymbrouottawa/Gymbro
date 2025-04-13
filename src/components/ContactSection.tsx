import {
  Instagram,
  Linkedin,
  Link as LinkIcon,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
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
    <footer className="bg-black text-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Logo à gauche */}
          <Link to="/" className="block">
            <div className="relative h-10 sm:h-12 w-auto">
              <img
                src="/lovable-uploads/9a6bbaf1-469d-440e-962f-1d156c551215.png"
                alt="The GymBro Logo"
                className="h-full w-auto filter drop-shadow-[0_0_5px_rgba(255,128,0,0.3)]"
              />
            </div>
          </Link>

          {/* Adresse au centre */}
          <div className="flex items-center space-x-2 text-center">
            <MapPin className="w-4 h-4 text-gymbro-orange" />
            <span>85 University Private #7, Ottawa, ON K1N 6N5</span>
          </div>

          {/* Icônes sociales à droite */}
          <div className="flex space-x-4">
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

    
    </footer>
  );
};

export default ContactSection;
