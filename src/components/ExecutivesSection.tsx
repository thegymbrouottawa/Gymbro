
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";

interface ExecutiveMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
}

const ExecutivesSection = () => {
  const [executives] = useState<ExecutiveMember[]>([
    {
      id: 1,
      name: "Farnam Parcham",
      title: "President",
      image: "/lovable-uploads/0980d6c4-c8d5-47cb-92cf-71bbcee386d6.png",
      bio: "As the President of The GymBro, Farnam leads the club with passion and dedication to fitness and student wellbeing."
    },
    {
      id: 2,
      name: "Ethan S. Tran",
      title: "VP of Internal Affairs",
      image: "/images/vp-internal.jpg",
      bio: "Ethan oversees the internal operations of the club, ensuring everything runs smoothly for our members."
    },
    {
      id: 3,
      name: "Diana Zinovjeva",
      title: "VP of External Affairs & Managing Director for The GymBro Podcast",
      image: "/images/vp-external.jpg",
      bio: "Diana manages external partnerships and directs The GymBro Podcast, bringing fitness knowledge to the student community."
    },
    {
      id: 4,
      name: "Cristophe Lemieux",
      title: "VP of Finance",
      image: "/images/vp-finance.jpg",
      bio: "Cristophe manages the club's financial resources to ensure sustainable operations and accessibility of programs."
    },
    {
      id: 5,
      name: "Noah Ramos",
      title: "VP of Marketing",
      image: "/images/vp-marketing.jpg",
      bio: "Noah leads our marketing strategies to expand our reach and promote fitness awareness throughout campus."
    },
    {
      id: 6,
      name: "Chenyu Bi",
      title: "VP of Bilingualism",
      image: "/images/vp-bilingualism.jpg",
      bio: "Chenyu ensures our content and communications are accessible to both English and French speaking students."
    },
    {
      id: 7,
      name: "Omid Yeganeh",
      title: "VP of Francophone",
      image: "/images/vp-francophone.jpg",
      bio: "Omid focuses on outreach and support for the francophone student community at UOttawa."
    },
    {
      id: 8,
      name: "Salma Belfaiz",
      title: "VP of Communication",
      image: "/images/vp-communication.jpg",
      bio: "Salma manages all club communications, keeping members informed and engaged with our activities."
    },
    {
      id: 9,
      name: "Sarah Johnson",
      title: "VP of Social Affairs",
      image: "/images/vp-social.jpg",
      bio: "Sarah organizes social events and activities to strengthen our fitness community and build relationships."
    }
  ]);

  return (
    <Section id="executives" title="Executive Members" background="dark">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {executives.map((executive) => (
          <Card key={executive.id} className="bg-gymbro-darkGray text-white border border-gray-800">
            <CardContent className="p-6">
              <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48 h-48">
                <img 
                  src={executive.image} 
                  alt={executive.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gymbro-orange">{executive.name}</h3>
              <h4 className="text-lg text-gray-300 mb-2">{executive.title}</h4>
              <p className="text-gray-400">{executive.bio}</p>
            </CardContent>
          </Card>
        ))}
        
        {/* Add Executive Card */}
        <Card className="bg-gymbro-darkGray text-white border border-gray-800 flex flex-col justify-center items-center">
          <CardContent className="p-6 text-center">
            <div className="mb-4 rounded-full bg-gray-800 flex items-center justify-center w-48 h-48 mx-auto">
              <span className="text-6xl text-gymbro-orange">+</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Add Executive Member</h3>
            <p className="text-gray-400">
              New executive members can be added through the admin panel.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default ExecutivesSection;
