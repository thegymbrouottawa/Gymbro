
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
}

const TrainersSection = () => {
  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Nayan Kar",
      specialty: "Strength Training",
      bio: "Specialized in powerlifting and strength development. Nayan has helped dozens of students achieve their strength goals.",
      rating: 4.9
    },
    {
      id: 2,
      name: "Mehdi Bibi",
      specialty: "Bodybuilding",
      bio: "Competitive bodybuilder with expertise in muscle development and aesthetic physique training.",
      rating: 4.8
    },
    {
      id: 3,
      name: "Justin Cocchio",
      specialty: "Functional Fitness",
      bio: "Focuses on practical strength and mobility, helping students build bodies that perform well in everyday life.",
      rating: 4.7
    },
    {
      id: 4,
      name: "Farnam Parcham",
      specialty: "Performance Training",
      bio: "Specializes in athletic performance, sports-specific training, and developing competitive edge.",
      rating: 4.9
    }
  ];

  return (
    <Section id="trainers" title="Our Personal Trainers" background="dark">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="bg-gymbro-darkGray text-white border border-gray-800 overflow-hidden">
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
