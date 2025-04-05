
import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Section from "./Section";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EventsSection = () => {
  const { toast } = useToast();
  
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Spring Fitness Workshop",
      date: "April 15, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Montpetit Hall Gym",
      description: "Join us for a comprehensive workshop on proper lifting techniques and injury prevention strategies.",
      image: "/images/event1.jpg"
    },
    {
      id: 2,
      title: "Nutrition Seminar",
      date: "April 22, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "FSS Building, Room 4007",
      description: "Learn about proper nutrition for muscle building and recovery with our expert guest speakers.",
      image: "/images/event2.jpg"
    },
    {
      id: 3,
      title: "End-of-Year Fitness Challenge",
      date: "May 5, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "University Square",
      description: "Test your strength and endurance in our annual fitness challenge with prizes for top performers.",
      image: "/images/event3.jpg"
    }
  ]);

  const handleRSVP = (eventId: number) => {
    toast({
      title: "RSVP Successful",
      description: "You have successfully registered for this event.",
    });
  };

  return (
    <Section id="events" title="Events" background="orange">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="bg-white text-black overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-700">
                  <Calendar size={16} className="mr-2 text-gymbro-orange" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={16} className="mr-2 text-gymbro-orange" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin size={16} className="mr-2 text-gymbro-orange" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600">{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleRSVP(event.id)}
                className="w-full bg-gymbro-orange hover:bg-gymbro-orange/90"
              >
                RSVP
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default EventsSection;
