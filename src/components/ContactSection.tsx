
import { Mail, Instagram, Linkedin, Link as LinkIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "./Section";

const ContactSection = () => {
  const contacts = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/uottawagymbroclubb/?igshid=NTc4MTIwNjQ2YQ%3D%3D",
      icon: Instagram
    },
    {
      platform: "LinkedIn",
      url: "https://ca.linkedin.com/company/the-gymbro",
      icon: Linkedin
    },
    {
      platform: "Linktree",
      url: "https://linktr.ee/the_gymbro",
      icon: LinkIcon
    },
    {
      platform: "Email",
      url: "mailto:Info.gymbro2023@gmail.com",
      icon: Mail,
      text: "Info.gymbro2023@gmail.com"
    }
  ];

  return (
    <Section id="contact" title="Contact Us" background="dark">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-8">
          Have questions about The GymBro or interested in joining our community? 
          Reach out to us through any of these platforms:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <a 
              key={contact.platform}
              href={contact.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gymbro-darkGray rounded-lg p-6 text-center transition-all duration-300 hover:bg-gymbro-orange hover:-translate-y-1 h-full flex flex-col items-center justify-center">
                <contact.icon className="w-8 h-8 mb-3 text-gymbro-orange group-hover:text-white" />
                <span className="font-bold block group-hover:text-white">
                  {contact.platform}
                </span>
                {contact.text && (
                  <span className="text-sm text-gray-400 group-hover:text-white mt-1 break-all">
                    {contact.text}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <MapPin className="w-5 h-5 mr-2 text-gymbro-orange" />
          <p className="text-md text-gray-300">
            85 University Private #7, Ottawa, ON K1N 6N5
          </p>
        </div>

        <div className="mt-12">
          <p className="text-lg mb-5">
            Want to join our team or suggest a collaboration opportunity?
          </p>
          <Button 
            asChild
            className="bg-gymbro-orange hover:bg-gymbro-orange/90 text-white px-8 py-6 text-lg"
          >
            <a href="mailto:Info.gymbro2023@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
