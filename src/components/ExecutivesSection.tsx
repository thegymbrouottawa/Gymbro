
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
      image: "/images/president.jpg",
      bio: "As the President of The GymBro, Farnam leads the club with passion and dedication to fitness and student wellbeing."
    },
    // You can add more executive members here
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
