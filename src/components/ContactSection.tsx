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

  return <div></div>;
};

export default ContactSection;
