
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  rating: number;
}

const TrainersSection = () => {
  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Nayan Kar",
      specialty: "Strength Training",
      image: "/lovable-uploads/7a21ec30-fc3f-4bee-9720-582dba3d1f1b.png",
      bio: "Specialized in powerlifting and strength development. Nayan has helped dozens of students achieve their strength goals.",
      rating: 4.9
    },
    {
      id: 2,
      name: "Mehdi Bibi",
      specialty: "Bodybuilding",
      image: "/lovable-uploads/db6a808a-b145-48af-92f0-70cdea8f6c96.png",
      bio: "Competitive bodybuilder with expertise in muscle development and aesthetic physique training.",
      rating: 4.8
    },
    {
      id: 3,
      name: "Justin Cocchio",
      specialty: "Functional Fitness",
      image: "/lovable-uploads/64a277fc-e62d-4495-8f26-2f15dc236606.png",
      bio: "Focuses on practical strength and mobility, helping students build bodies that perform well in everyday life.",
      rating: 4.7
    },
    {
      id: 4,
      name: "Farnam Parcham",
      specialty: "Performance Training",
      image: "/lovable-uploads/17e432f7-cf95-4f4e-8a39-fcfcf533da82.png",
      bio: "Specializes in athletic performance, sports-specific training, and developing competitive edge.",
      rating: 4.9
    }
  ];

  return (
    <Section id="trainers" title="Our Personal Trainers" background="dark">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="bg-gymbro-darkGray text-white border border-gray-800 overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gymbro-orange">{trainer.name}</h3>
              <h4 className="text-lg text-gray-300 mb-2">{trainer.specialty}</h4>
              <p className="text-gray-400 mb-4">{trainer.bio}</p>
              
              <div className="flex items-center">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      size={16} 
                      className={`${i < Math.floor(trainer.rating) ? 'text-gymbro-orange' : 'text-gray-600'} ${
                        i === Math.floor(trainer.rating) && trainer.rating % 1 !== 0 ? 'fill-gymbro-orange/50' : ''
                      }`}
                      fill={i < Math.floor(trainer.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-300">{trainer.rating.toFixed(1)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TrainersSection;
