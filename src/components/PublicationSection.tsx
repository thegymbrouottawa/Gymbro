import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import Section from "./Section";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const PublicationSection = () => {
  const [teamMembers] = useState<TeamMember[]>([
    {
      name: "Ana Milinkovic",
      title: "Editor in Chief & Publisher",
      image: "/lovable-uploads/57e88d19-7a21-4894-91e6-05166b4f0768.png",
      bio: "My name is Ana Milinkovic, and I am the Editor in Chief and Publishing for the official publication team at The GymBro at the University of Ottawa. As a fourth-year student pursuing a degree in Communication, I joined this role at the beginning of the school year with the hope of making a meaningful impact in our local community and student body. I lead a team of writers where we work to share stories, tips, and ideas about fitness and wellness that are relatable and helpful, we're all about keeping it real and creating content that speaks to students!\n\nI am deeply passionate about community connections and believe that working together not only benefits us individually but also enables us to create a positive and lasting impact for others. I value the power of collaboration and the transformative change that happens when people come together with common goals. For me, playing a role in educating and connecting others about fitness, wellness, and overall health is incredibly important because I strongly believe that a healthy lifestyle helps us thrive in our daily lives. I am passionate about helping the student body learn how to balance and manage a healthy lifestyle with our extremely busy schedules.\n\nGrowing up, I had a versatile fitness background. I participated in various sports such as track and field, basketball, and skiing, but the most consistent experience was competing in competitive water polo all the way into adulthood! Playing a physically demanding team sport taught me the importance of relying on teammates and community. These experiences instilled in me a strong appreciation for collaboration and showed me that learning from others is essential for achieving the best outcomes in any setting. Currently, I enjoy going to the gym three times a week, practicing yoga, and exploring new exercises to strengthen different muscle groups.",
    },
    {
      name: "Kaylen White",
      title: "Head of Marketing",
      image: "/lovable-uploads/291ec1fe-400c-4875-b9c6-af9d13b2d68a.png",
      bio: "Kaylen is a part of the marketing team at The GymBro, she is currently pursuing a bachelor of arts in Nursing, Kaylen is excited to further healthy living opportunities and mentorship to the student body through The GymBro. It is her job to promote the club through social media and during our various events.\n\nKaylen was a competitive swimmer from a young age and gained a love for fitness during that time. She stayed close to the water and became a lifeguard; it was there she became interested in health and wellness and how the physiology of the human body functioned. Since then, she has continued to be very involved in the fitness world; she goes to the gym daily and has become a brand ambassador for Bucked Up. She joined The GymBro because its mission was the same philosophy she lived her life by, and she could now meet new, like-minded people on the same journey of promoting fitness and bettering themselves as her.\n\nWith her mentorship at The GymBro, Kaylen hopes to inspire female gym-goers who aren't sure of how to start their fitness journey: those who want to get functionally fit rather than become bodybuilders and improve their overall mental and physical health. With over four years of experience in the health sphere, her goal is that rather than being a coach, she can reach out to women in the gym as a friend who will work out with and motivate them. She believes that taking the first steps to a healthy lifestyle is hard, but having discipline will always overpower thoughts of weakness. Do what you can, and don't get discouraged when it gets hard!",
    },
    {
      name: "Maria Vukojevic",
      title: "Writer",
      image: "/lovable-uploads/eeef0a51-6879-460f-b6e4-f31c81274ab5.png",
      bio: "My name is Maria Vukojevic, and I am a writer for the publication. I am currently a third-year full-time student pursuing an Honours Bachelor of Commerce degree at the Telfer School of Management with a focus in International Management. I contribute a first-hand perspective on topics such as the student-athlete life, as well as my experience with mental health and the strong correlation it has with physical activity. As someone who has struggled with their mental health in the past, and has juggled being a student and a competitive athlete for the majority of my life, I hope to bring a new perspective on how physical activity can positively impact mental well-being, and how maintaining a balance between academics and athletics is crucial for overall health and success.\n\nI am a second-generation Canadian of Serbian heritage, born to Bosnian-Serbian immigrant parents. My nationality and roots are deeply important to me, as Serbian customs, traditions, and religion have shaped who I am. Alongside this, I am also a student-athlete on the university's Women's Water Polo Team. I have been a water polo player since the age of eight; the majority of my childhood nights were spent in swimming pools and the sport has been a huge part of my life.\n\nWhen the chance to join The GymBro Publication Team arose, I eagerly embraced the opportunity. It allowed me to engage more with the university, connect with students across disciplines, and gain diverse perspectives. With its bright minds and growing influence, The GymBro has the potential to make a real impact—an initiative I was excited to contribute to.",
    },
    {
      name: "Eva Milinković",
      title: "Writer",
      image: "/lovable-uploads/62c9e1aa-b27c-4b89-851c-0bec91fdcb56.png",
      bio: "My name is Eva Milinkovic, and I am a writer for the publication team. I'm in my first year of Biomedical Science, and I'm excited to write and share with the student community about the scientific aspects of health and fitness. My main writing focus is mental well-being, sleep, and nutrition.\n\nI have been an athlete for many years: I've done a number of sports, such as boxing, rugby, and water polo. I now play as a goalie on the Gee Gees' and Team Ontario water polo teams, and have been a coach at my club for nearly 4 years.\n\nI've been deeply invested in my own fitness journey and have spent numerous hours conducting personal research to better understand what kind of training and nutrition works for me and why. Everyone has their own requirements, needs, and goals to meet when it comes to fitness, and by researching and writing about the varied kinds I hope I can make it that much easier for others to apply it to their own routines.\n\nMy goal is to provide easy and reliable access to information to students through a focus on the science behind fitness, ensuring they have the knowledge and resources needed to make informed decisions about their health, training, and overall well-being.",
    },
  ]);

  return (
    <Section id="publication" title="The GymBro Publication" background="dark">
      <div className="mb-12">
        <p className="text-lg mb-6">
          As the first bodybuilding club at the University of Ottawa, The GymBro
          is vital in creating a platform to amplify all elements of this
          lifestyle. The Publication team is dedicated to transforming fitness
          frameworks into engaging content to spread awareness and inspire
          students to embrace health and wellness lifestyles.
        </p>
        <p className="text-lg mb-6">
          Unrealistic and strict diet plans, poor training routines, and the
          general spreading of misinformation, cause room for confusion and
          discouragement related to health and fitness. Nevertheless, with the
          help of The GymBro and its Publication team, students will now have
          guidance on their wellness journeys from a trusted source filled with
          knowledge and encouragement.
        </p>
        <p className="text-lg mb-6">
          At the heart of The GymBro Publication is a team of writers dedicated
          to spreading insight on fitness and health. Our team of publicists
          have a passion for delving into versatile health and fitness
          frameworks with the goal of making this knowledge readily available to
          students.
        </p>
        <p className="text-lg mb-6">
          Our team is made up of different academic and fitness backgrounds,
          each contributes their own knowledge gained from personal experience
          as well as formal education and research. These elements allow the
          Publication team to have in-depth, first-hand experiences on what the
          balance between studies, fitness, and sports really entails. Overall,
          each member delivers a collection of innovative ideas and viewpoints
          to the team, ensuring that a wide range of perspectives is represented
          in our content.
        </p>
        <p className="text-lg mb-6">
          Through the combined effort of all the contributors to the Publication
          team, The GymBro can successfully provide a broad scope of content
          designed to cater to students with varying fitness levels and
          interests. Our writing will present branches of knowledge concerning
          subjects such as informative fitness writing, wellness tips, and
          mental health and exercise-focused literature.
        </p>
        <p className="text-lg">
          At its core, The GymBro's Publication Team is an assembly of students
          at the University of Ottawa who are driven and passionate about health
          and fitness. This group of peers is dedicated to acquiring the proper
          knowledge to develop writing that will help the rest of the student
          body in their fitness journeys.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-gymbro-orange text-center mb-8">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gymbro-darkGray rounded-lg overflow-hidden shadow-lg border border-gray-800"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold text-white">{member.name}</h4>
              <p className="text-gymbro-orange mb-2">{member.title}</p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gymbro-orange hover:text-white p-0"
                  >
                    Read Bio <ChevronRight size={16} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gymbro-darkGray text-white border border-gray-800 max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-gymbro-orange">
                      {member.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <h4 className="text-xl text-gymbro-orange mb-4">
                      {member.title}
                    </h4>
                    {member.bio.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-gray-300 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PublicationSection;
