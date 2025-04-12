
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
  fullBio: string;
}

const TrainersSection = () => {
  const [trainers] = useState<Trainer[]>([
    {
      id: 1,
      name: "Nayan Kar",
      specialty: "Strength Training",
      bio: "Specialized in powerlifting and strength development. Nayan has helped dozens of students achieve their strength goals.",
      rating: 5.0,
      fullBio: "With the role of a Personal Trainer for The GymBro Club, Nayan is able to provide a new and comprehensive perspective to the health and fitness community at the university. This includes contributing to the aesthetic and strength aspects of the gym, while simultaneously emphasizing the overall performance and mobility that one can gain through fitness. With Nayan's promotion of inclusivity and entertainment, he hopes to create an environment where all students feel welcome and a space that will motivate them to pursue a balanced health and fitness lifestyle. \n\nCurrently pursuing his third-year of Health Science, he also divides his time between his personal training, his gym journey, and his love for soccer. With the help of his degree, he has gained a profound understanding of biomechanics and nutrition as a whole. Additionally, having a background in martial arts and sports, he has acquired an extensive comprehension of performance-focused exercises. \n\nFor Nayan, the gym is more than just a place where he can make progress on his physique – it is a supportive atmosphere that nurtures his mental and emotional well-being as well. He views his fitness journey as one that encompasses various aspects such as discipline, self-care, and empowerment. When Covid hit, Nayan discovered a willingness to make a change to his lifestyle and habits. This newly found motivation pushed him to create his own workout program that he consistently followed. Over time, his dedication led him to getting the results he desired, and ever since, his devotion to fitness has continued to deepen. \n\nA fun fact that highlights Nayan's expertise within the fitness world is his remarkable achievement of earning a black belt in martial arts!"
    },
    {
      id: 2,
      name: "Mehdi Bibi",
      specialty: "Bodybuilding",
      bio: "Competitive bodybuilder with expertise in muscle development and aesthetic physique training.",
      rating: 5.0,
      fullBio: "As a Personal Trainer for the GymBro, Mehdi is able to provide a free service to the UOttawa students that would normally be expensive and unaffordable to most. When it comes to fitness and the gym, he is in a position to offer insights on misconceptions about this topic. Although it may be intimidating to get into the gym at first, Mehdi is a personal trainer that is very informed and willing to help people get over this fear. One of his mottos about easing into fitness and a healthy lifestyle is 'Keep it stupid, keep it simple'. He advises people to keep their approaches straightforward and practice moderation, warning that overdoing anything can ultimately result in overkill.\n\nMehdi is a hardworking fourth-year student with a Joint Honours in Mathematics and Economics. Additionally, he is the President of the Student Voyagers University of Ottawa Club. He successfully manages to be an active member of various clubs at the university while also pursuing his degree, serving as a personal trainer, and investing in his health and fitness.\n\nOne of the motivators that led Mehdi to pursue fitness were the societal norms that tend to be pushed on young men and boys to be 'strong'. Growing up, he also took a strong liking for superhero movies which reinforced this notion. Apart from this, he found that the gym and focusing on bettering his health were useful tools for improving his overall self image. With time, his fitness became more about the journey itself, and the gym served as an escape and a place of downtime for him.\n\nA fun fact about Mehdi is that he was born in Tunisia. He moved to Canada at the age of four and has lived here ever since!"
    },
    {
      id: 3,
      name: "Justin Cocchio",
      specialty: "Functional Fitness",
      bio: "Focuses on practical strength and mobility, helping students build bodies that perform well in everyday life.",
      rating: 5.0,
      fullBio: "Serving as a Personal Trainer for The GymBro, Justin hopes to help others get involved in the gym and provide them with the opportunities that the gym granted him; this includes overall life improvement and a friendly community. Beginning a gym journey can be difficult, but with the right support from experienced gym enthusiasts like Justin, this transition and commitment can become a lot more enjoyable. Further, being an employee at a gym, he gains insight and knowledge of the corporate gym environment that he can utilize for the success of the club and to strengthen his own understanding of fitness.\n\nJustin is in his second-year of Biomedical Science and efficiently balances his strenuous studies, university involvements, health and fitness journey, and is also an employee at the GoodLife Gym Company. He demonstrates that efficiently finding ways to juggle varying responsibilities is a necessity for achieving a healthy and fulfilling lifestyle. \n\nFrom a young age, playing sports like soccer and volleyball, Justin has always been very active and involved with athletics. Unfortunately, he dislocated his knee in the eleventh grade and spent a large portion of his time in crutches, forcing him to sideline his love for organized sports. His path to pursuing the gym began when he was told in physio that it was necessary for him to strengthen his quads in order to protect his knee. In addition, social media was an aspect that motivated him to pursue fitness to the extent that he presently does. \n\nA fitness tip that Justin swears by is one that involves walking backwards on an inclined treadmill before leg days. This exercise is one that helps him prevent the majority of his knee pain and he suggests it for anyone that experiences problems with their knees."
    },
    {
      id: 4,
      name: "Axel",
      specialty: "Athletic Performance",
      bio: "Specializes in athletic performance, sports-specific training, and developing competitive edge.",
      rating: 5.0,
      fullBio: "Being one of the Personal Trainers for the GymBro Club, Axel is able to successfully leverage his fitness and gym expertise to help others achieve their goals. Having once been someone who needed support on his gym journey, he understands firsthand what it feels like to be in the shoes of a beginner. Previously a soccer athlete – playing in high school and later transitioning to 7v7 Men's Soccer, Axel has a thorough understanding of fitness itself. His grasp on this topic is not only applicable through the perspective of gym training, but from the point of view of an athlete as well. \n\nAxel is currently completing his fourth-year in Exercise Science at the university. He prosperously manages to juggle his studies, his ongoing health and fitness journey, alongside his personal training obligations. Additionally, he offers a unique and informed view with the help of his degree; his personal training abilities are further extended through his knowledge about the human body and all the varying topics explored in Exercise Science.\n\nAxel's initial introduction to exercise stemmed from his involvement in sports and being an athlete. Getting into exercise outside of soccer opened his eyes to a different outlook on training that he had not been exposed to yet. One of Axel's main motivators on his path to deepening his relationship with the gym and fitness was his roomate. Having a helping and guiding hand is a useful tool in getting over gym fears or confusion; this was an aspect that pushed Axel to achieve the consistency he has displayed in his journey thus far.\n\nA health and fitness tip that Axel has tried out himself and recommends to others is the 'anabolic window period'. This phenomenon suggests that eating protein and carbs around thirty minutes to two hours after a workout is the best recipe for optimal muscle gains and results."
    }
  ]);

  return (
    <Section id="trainers" title="Our Personal Trainers" background="dark">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="bg-gymbro-darkGray text-white border border-gray-800 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gymbro-orange">{trainer.name}</h3>
              <h4 className="text-lg text-gray-300 mb-2">{trainer.specialty}</h4>
              <p className="text-gray-400 mb-4">{trainer.bio}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      size={16} 
                      className="text-gymbro-orange"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-300">{trainer.rating.toFixed(1)}</span>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full text-gymbro-orange border-gymbro-orange hover:bg-gymbro-orange hover:text-white">
                    Read More
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gymbro-darkGray text-white border border-gray-800 max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-gymbro-orange">{trainer.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <h4 className="text-lg text-gray-300 mb-4">{trainer.specialty}</h4>
                    {trainer.fullBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-400 mb-4">{paragraph}</p>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TrainersSection;
