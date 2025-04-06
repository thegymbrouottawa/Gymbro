
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "upcoming" | "past" | "award";
  image?: string;
}

const EventsSection = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Students Life Award 2025",
      date: "April 4, 2025",
      location: "11 Colonel By Dr, Ottawa, ON K1N 9J1",
      description: "The GymBro club is honored to receive the Sports Club of the Year award at the annual Student Life Awards ceremony.",
      type: "award",
      image: "/lovable-uploads/c810e4f0-4dfe-4015-8351-942038396c88.png"
    },
    {
      id: 2,
      title: "Summer Fitness Challenge",
      date: "June 10, 2025",
      location: "Campus Recreation Center",
      description: "Join us for our annual summer fitness challenge. Compete in various strength and endurance events for prizes and bragging rights!",
      type: "upcoming"
    },
    {
      id: 3,
      title: "Nutrition Workshop",
      date: "July 5, 2025",
      location: "Health Sciences Building",
      description: "Learn about proper nutrition for muscle building and fat loss with our expert guest speakers.",
      type: "upcoming"
    }
  ];

  return (
    <Section id="events" title="Events & Awards" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Award Feature Card */}
        <Card className="col-span-full lg:col-span-1 border-2 border-gymbro-orange overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-1 h-full">
            <div className="aspect-square bg-black">
              <img 
                src="/lovable-uploads/c810e4f0-4dfe-4015-8351-942038396c88.png" 
                alt="Student Life Award Trophy" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 bg-black text-white">
              <div className="flex items-center mb-3">
                <Trophy size={18} className="mr-2 text-gymbro-orange" />
                <Badge variant="outline" className="border-gymbro-orange text-gymbro-orange">
                  Award
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gymbro-orange">Students Life Award 2025</h3>
              <p className="text-gray-300 text-sm mb-4">
                Sports Club of the Year Award received by The GymBro at the annual Student Life Awards ceremony. 
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>April 4, 2025</span>
                <MapPin size={16} className="ml-4 mr-2" />
                <span>11 Colonel By Dr, Ottawa, ON K1N 9J1</span>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Team Image Card */}
        <Card className="col-span-full lg:col-span-2 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="aspect-video lg:h-full bg-black">
              <img 
                src="/lovable-uploads/95ef6e93-cc49-433e-b719-9c02b580c4f3.png" 
                alt="Team photo with award" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 bg-black text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-gymbro-orange">Team Achievement</h3>
              <p className="text-gray-300 mb-6">
                The GymBro team celebrates their achievement at the Student Life Awards 2025. 
                Hard work and dedication from all our members led to this recognition.
              </p>
              <p className="text-gymbro-orange font-semibold">
                We're proud of our community and thankful for everyone's support!
              </p>
            </CardContent>
          </div>
        </Card>

        {/* Upcoming Events */}
        {events.filter(event => event.type === "upcoming").map((event) => (
          <Card key={event.id} className="bg-white shadow-md overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <Calendar size={18} className="mr-2 text-gymbro-orange" />
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={16} className="mr-2 text-gymbro-orange" />
                <span>{event.location}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default EventsSection;
