
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import Section from "./Section";

interface Publication {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  content: string;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const PublicationSection = () => {
  const [publications, setPublications] = useState<Publication[]>([
    {
      id: 1,
      title: "The Science of Muscle Recovery",
      excerpt: "Understand the key physiological processes behind muscle recovery and how to optimize your rest days.",
      coverImage: "/images/publication-1.jpg",
      author: "Ana Milinkovic",
      date: "March 15, 2025",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla magna vitae elit sagittis maximus. Quisque efficitur felis sed ligula faucibus, ac dictum lorem elementum. Vivamus varius purus non placerat congue..."
    },
    {
      id: 2,
      title: "Nutrition Myths Debunked",
      excerpt: "Separating fact from fiction in the world of fitness nutrition and supplement industry.",
      coverImage: "/images/publication-2.jpg",
      author: "Eva Milinković",
      date: "February 28, 2025",
      content: "Nulla porttitor augue at diam facilisis, id rhoncus erat suscipit. Fusce in risus ipsum. Duis eget felis a augue lobortis dictum. Nulla facilisi. Pellentesque efficitur posuere libero, quis ultricies sem malesuada sed..."
    },
    {
      id: 3,
      title: "Mindfulness & Strength Training",
      excerpt: "How incorporating mindfulness practices can dramatically improve your lifting performance.",
      coverImage: "/images/publication-3.jpg",
      author: "Maria Vukojevic",
      date: "January 10, 2025",
      content: "Phasellus blandit nisl ut purus convallis pharetra. Mauris vitae neque nec nibh lobortis consequat. Vestibulum ornare, eros eget fermentum lobortis, ipsum orci tincidunt urna, eu pulvinar ligula eros ac tortor..."
    }
  ]);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      name: "Ana Milinkovic",
      title: "Editor in Chief & Publisher",
      image: "/lovable-uploads/57e88d19-7a21-4894-91e6-05166b4f0768.png"
    },
    {
      name: "Kaylen White",
      title: "Head of Marketing",
      image: "/lovable-uploads/b0ce0206-3be6-4679-8a30-b18a413ea720.png"
    },
    {
      name: "Maria Vukojevic",
      title: "Writer",
      image: "/lovable-uploads/6eb1efe7-0af7-4cbb-b950-6119fae97655.png"
    },
    {
      name: "Eva Milinković",
      title: "Writer",
      image: "/lovable-uploads/62c9e1aa-b27c-4b89-851c-0bec91fdcb56.png"
    }
  ]);

  return (
    <Section id="publication" title="The GymBro Publication" background="dark">
      <div className="mb-12">
        <p className="text-lg mb-6">
          As the first bodybuilding club at the University of Ottawa, The GymBro is vital in creating a platform to amplify all elements of this lifestyle. The Publication team is dedicated to transforming fitness frameworks into engaging content to spread awareness and inspire students to embrace health and wellness lifestyles.
        </p>
        <p className="text-lg mb-6">
          Unrealistic and strict diet plans, poor training routines, and the general spreading of misinformation, cause room for confusion and discouragement related to health and fitness. Nevertheless, with the help of The GymBro and its Publication team, students will now have guidance on their wellness journeys from a trusted source filled with knowledge and encouragement.
        </p>
        <p className="text-lg mb-6">
          At the heart of The GymBro Publication is a team of writers dedicated to spreading insight on fitness and health. Our team of publicists have a passion for delving into versatile health and fitness frameworks with the goal of making this knowledge readily available to students.
        </p>
        <p className="text-lg mb-6">
          Our team is made up of different academic and fitness backgrounds, each contributes their own knowledge gained from personal experience as well as formal education and research.
          These elements allow the Publication team to have in-depth, first-hand experiences on what the balance between studies, fitness, and sports really entails. Overall, each member delivers a collection of innovative ideas and viewpoints to the team, ensuring that a wide range of perspectives is represented in our content.
        </p>
        <p className="text-lg mb-6">
          Through the combined effort of all the contributors to the Publication team, The GymBro can successfully provide a broad scope of content designed to cater to students with varying fitness levels and interests. Our writing will present branches of knowledge concerning subjects such as informative fitness writing, wellness tips, and mental health and exercise-focused literature.
        </p>
        <p className="text-lg">
          At its core, The GymBro's Publication Team is an assembly of students at the University of Ottawa who are driven and passionate about health and fitness. This group of peers is dedicated to acquiring the proper knowledge to develop writing that will help the rest of the student body in their fitness journeys.
        </p>
      </div>

      <Tabs defaultValue="publications" className="w-full">
        <TabsList className="w-full flex justify-center mb-8 bg-transparent">
          <TabsTrigger 
            value="publications" 
            className="text-base px-6 data-[state=active]:bg-gymbro-orange data-[state=active]:text-white"
          >
            Latest Publications
          </TabsTrigger>
          <TabsTrigger 
            value="team" 
            className="text-base px-6 data-[state=active]:bg-gymbro-orange data-[state=active]:text-white"
          >
            Our Team
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="publications" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication) => (
              <div key={publication.id} className="bg-gymbro-darkGray rounded-lg overflow-hidden shadow-lg border border-gray-800">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={publication.coverImage} 
                    alt={publication.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>
                  <p className="text-gray-300 mb-4">{publication.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{publication.author} • {publication.date}</span>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="text-gymbro-orange hover:text-white">
                          Read More <ChevronRight size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{publication.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-sm text-gray-500">{publication.author} • {publication.date}</span>
                          </div>
                          <p className="text-lg leading-relaxed">{publication.content}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gymbro-darkGray rounded-lg overflow-hidden shadow-lg border border-gray-800">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <p className="text-gymbro-orange">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
};

export default PublicationSection;
