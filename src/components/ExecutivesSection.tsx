
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ExecutiveMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  fullBio?: string;
}

const ExecutivesSection = () => {
  const [executives] = useState<ExecutiveMember[]>([
    {
      id: 1,
      name: "Farnam Parcham",
      title: "President",
      image: "/lovable-uploads/0980d6c4-c8d5-47cb-92cf-71bbcee386d6.png",
      bio: "As the President of The GymBro, Farnam leads the club with passion and dedication to fitness and student wellbeing.",
      fullBio: "As the President of The GymBro Club, Farnam recognized a missing space for bodybuilding and fitness enthusiasts within the University of Ottawa and took the initiative to fill the gap. His deep passion for fitness, combined with the post-COVID rise in bodybuilding's popularity, inspired him to establish a club dedicated to this discipline. What excites Farnam the most about The GymBro Club is the sense of community and friendship it fosters, along with the role it plays in helping students relieve stress and tension through fitness.\n\nFarnam is currently in his third year of Biomedical Science at the university. He successfully balances his academic responsibilities with his commitment to his extracurricular activities, passion for fitness, and his dedication to The GymBro. As the club's leader, he plays an integral role in guiding its growth while simultaneously developing his own knowledge of health and fitness. Despite managing the club and guiding its direction, he ensures that every member feels included and respected. He prioritizes collaboration and encourages a team dynamic rather than a top-down structure. Instead of positioning himself as an authority figure, Farnam cultivates an environment where everyone can contribute equally and work together toward a shared vision.\n\nHis fitness journey started beyond the gym, taking shape on the basketball court, where his passion for movement and competition first developed. Unfortunately, he experienced a minor injury that caused him to slow down. Soon after, the COVID-19 pandemic hit, and during that time, he developed an interest in weight training. Ever since, Farnam has made the gym his space for building muscle and maintaining strength, all while continuing to enjoy basketball recreationally on the side.\n\nWith his leadership position in The GymBro, Farnam aims to enhance and expand the club's impact on campus. His vision includes growing the various facets that exist within the club such as the podcast, the personal training program, and matchmaker program. His goal is to effectively do so while reaching more UOttawa students and spreading the club's message of fitness and inclusivity."
    },
    {
      id: 2,
      name: "Ethan S. Tran",
      title: "VP of Internal Affairs",
      image: "/lovable-uploads/3c4a54da-bf35-4e05-a22a-578a9914185a.png",
      bio: "Ethan oversees the internal operations of the club, ensuring everything runs smoothly for our members.",
      fullBio: "As The GymBro's VP of Internal Affairs, Ethan plays a key role in keeping the club organized and connected. He supports the president, keeps track of weekly meeting notes, and ensures that external members feel welcome and engaged. His goal is to help The GymBro run smoothly while fostering a strong sense of community among students who are passionate about fitness.\n\nA third-year Chemical Engineering student, Ethan has always been drawn to problem-solving and helping others. His love for fitness started as a personal journey to stay active and clear his mind, but it quickly grew into a passion for encouraging others to do the same. He believes that everyone should incorporate movement into their lives, and he joined The GymBro to help make fitness more accessible and enjoyable for students.\n\nFor Ethan, The GymBro is more than just a club, it's a place where students can come together, find motivation, and support one another in reaching their goals. He envisions a community where people of all experience levels feel comfortable, get solid advice, and push each other to be their best. His fun fitness tip? Take creatine!"
    },
    {
      id: 3,
      name: "Diana Zinovjeva",
      title: "VP of External Affairs & Managing Director for The GymBro Podcast",
      image: "/images/vp-external.jpg",
      bio: "Diana manages external partnerships and directs The GymBro Podcast, bringing fitness knowledge to the student community.",
      fullBio: "Diana is The GymBro's VP External and the voice behind our podcast. She's all about building community, meeting new people, and having real conversations about health and fitness. Through the podcast, she brings in experts like trainers and nutritionists - to share insights, advice, and personal stories that students can actually relate to.\n\nSports have always been a big part of Diana's life. She grew up running track, doing cross-country, and competing in gymnastics. Now in her third year of Health Science, she's still just as passionate about fitness and staying active. For her, The GymBro is more than just a publication, it's a way to stay motivated, surround herself with like-minded people, and keep pushing toward her own health goals.\n\nWhen she's not hitting the gym or working on the podcast, Diana is always looking for new ways to challenge herself (fun fact: she can crank out six pull-ups in a row!). She's excited to bring in more pros, share valuable tips, and help students stay inspired on their fitness journey."
    },
    {
      id: 4,
      name: "Cristophe Lemieux",
      title: "VP of Finance",
      image: "/images/vp-finance.jpg",
      bio: "Cristophe manages the club's financial resources to ensure sustainable operations and accessibility of programs.",
      fullBio: "As The GymBro's Vice President of Finance, Christophe ensures the financial health of our organization. From planning budgets and meeting critical submission deadlines to setting up credit card accounts, they play a vital role in keeping the publication running smoothly.\n\nA dedicated International Business student with a passion for fitness, Christophe balances their academic pursuits with an active lifestyle, working out 3-4 times a week and playing sports like soccer, ice hockey, and rugby. Their journey into health and fitness began during the lockdown, inspired by YouTube tutorials that eventually led them to explore the gym and its transformative power.\n\nFor Christophe, fitness is about more than personal growth, it's about community. Their goal is to bring fitness to more people, helping them lead healthier lives while building a supportive network where students can make connections and find like-minded friends. Through their role, Christophe is gaining valuable business experience while working towards their vision of a stronger fitness community on campus.\n\nA fun fact? It took Christophe two and a half years of dedication to achieve a three-plate squat - proof that perseverance pays off both in and out of the gym!"
    },
    {
      id: 5,
      name: "Noah Ramos",
      title: "VP of Marketing",
      image: "/lovable-uploads/ff985261-327c-425f-bbd6-0954e24c59ca.png",
      bio: "Noah leads our marketing strategies to expand our reach and promote fitness awareness throughout campus.",
      fullBio: "As The GymBro's VP of Marketing, Noah is a second-year finance student and is the lead behind the club's promotion, events, and outreach. He ensures that students know about everything The GymBro has to offer, from training resources to community events. He also co-hosts the club's podcast with Diana, where they dive into fitness, health, and motivation. With a passion for marketing and a background in sales, Noah brings fresh ideas and strategic thinking to help grow The GymBro's presence on campus.\n\nNoah has been dedicated to bodybuilding for over a decade. His fitness journey started when his mom got into working out, inspiring him to follow in her footsteps and create his own journey in the fitness world. Growing up, he was always active, playing volleyball, rock climbing, and boxing, but lifting became a core part of his life. Strength isn't just physical for Noah; it's a mindset. He loves pushing himself, embracing discomfort, and making health a priority.\n\nNoah's vision for The GymBro is to take the club to the next level and foster a bigger bodybuilding community on campus. He believes working out has incredible benefits, both mentally and physically, and he wants to help students find that same sense of purpose. His fitness tip? Prioritize comfort over pushing yourself too far! And a fun fact, he tries to cold plunge every morning!"
    },
    {
      id: 6,
      name: "Chenyu Bi",
      title: "VP of Bilingualism",
      image: "/images/vp-bilingualism.jpg",
      bio: "Chenyu ensures our content and communications are accessible to both English and French speaking students.",
      fullBio: "As The GymBro's VP Bilingualism, Chenyu plays a key role in making sure everything from events to posts to documents is accessible in both English and French. He helps organize events in both official languages and ensures that all students, no matter their background, can be part of the The GymBro community.\n\nChenyu's fitness journey started as a way to lose weight, but over the past three years, it's turned into a passion. He joined the University of Ottawa's lifting team, and strength training has even helped him improve in other sports, like ping pong, where he competes on the university team. As a third-year Statistics student, he understands the value of setting goals. One of his biggest achievements was hitting the 1,000-pound club this summer, a goal he set at the very start of his fitness journey.\n\nFor Chenyu, fitness is about more than just lifting, it's about discipline, resilience, and doing things the right way. After going through five serious injuries and having to reset his progress each time, he's learned firsthand how important it is to train smart and prevent injuries. He's passionate about making fitness accessible and helping people build a strong, supportive community where they can train safely and reach their goals."
    },
    {
      id: 7,
      name: "Omid Yeganeh",
      title: "VP of Francophone",
      image: "/images/vp-francophone.jpg",
      bio: "Omid focuses on outreach and support for the francophone student community at UOttawa.",
      fullBio: "As The GymBro's Bilingual Coordinator, Omid is responsible for creating engaging Instagram posts and ensuring they are accessible in both English and French. His role helps expand The GymBro's reach, making sure as many students as possible can benefit from the club's fitness resources and community. With a passion for communication and fitness, Omid plays a key part in keeping students informed and motivated.\n\nAs a third-year Health Sciences student, Omid has spent the last two summers volunteering in a research lab, making him an active part of the research community. His journey into fitness began during the COVID-19 pandemic when he realized how much a lack of physical activity impacted his mental health. Once he started going to the gym, he saw a huge difference, and now he works out multiple times a week, focusing on full-body training. Through The GymBro, he hopes to help others experience the same positive impact that fitness had on his life.\n\nOmid's vision is to help The GymBro grow into the top fitness club at uOttawa by spreading awareness and making it more accessible to students. He wants to inspire others to prioritize their health and find a supportive community along the way. And a fun fact when he's not at the gym, he's a huge fan of motorsports!"
    },
    {
      id: 8,
      name: "Salma Belfaiz",
      title: "VP of Communication",
      image: "/images/vp-communication.jpg",
      bio: "Salma manages all club communications, keeping members informed and engaged with our activities.",
      fullBio: "As The GymBro's VP of Communications, Salma is the creative mind behind our media and content. From researching fitness trends to making engaging Instagram videos, she helps bring The GymBro's message to life. With a background in journalism and experience working at CHUO FM, the University of Ottawa's radio station, she's passionate about using media to educate and inspire students on their fitness journeys.\n\nSalma's interest in fitness started with martial arts, where she first hit the gym to build muscle for training. Over time, she expanded into basketball, yoga, and Pilates, especially during the pandemic. Now majoring in Psychology, she sees firsthand how fitness impacts both mental and physical health especially in managing PCOS and regulating hormones. Every psych course she takes reinforces the importance of movement, which is why she's so excited to be part of a club that promotes a balanced, healthy lifestyle.\n\nFor Salma, The GymBro isn't just about working out, it's about community. She used to feel intimidated going to the gym alone, but this club gave her a space to connect with others who share her goals. Now, she wants to help other students find their own gym buddies, build confidence, and create a welcoming space where fitness feels accessible to everyone. And if she could give just one tip? Never skip cardio!"
    },
    {
      id: 9,
      name: "Sarah Johnson",
      title: "VP of Social Affairs",
      image: "/lovable-uploads/a6ac2db6-035f-4ed1-b3fa-a22ddbec0bc7.png",
      bio: "Sarah organizes social events and activities to strengthen our fitness community and build relationships.",
      fullBio: "As The GymBro's VP of Social Affairs, Sarah helps manage and post content that keeps our community engaged and inspired. She's passionate about creating a space where students can connect, learn, and grow in their fitness journeys. Whether it's through social media or community events, she's all about making The GymBro a welcoming and motivating place for everyone.\n\nSarah is in her fourth year of Health Science and has spent the last three years working in the Human and Environmental Physiology Research Unit, gaining hands-on experience in exercise physiology. Growing up, she trained in classical ballet, but when she started university, bodybuilding caught her attention, and she's been hooked ever since. Her background in both science and movement gives her a unique perspective on fitness, and she loves sharing that knowledge with others.\n\nFor Sarah, The GymBro is more than just a club, it's a way to bring students together and build a strong gym community on campus. She's excited to keep expanding its reach, helping people connect, stay motivated, and find their place in fitness. And a fun fact? She can wiggle her ears!"
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
              <p className="text-gray-400 mb-4">{executive.bio}</p>
              
              {executive.fullBio && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full text-gymbro-orange border-gymbro-orange hover:bg-gymbro-orange hover:text-white">
                      Read Full Bio
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gymbro-darkGray text-white border border-gray-800 max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-gymbro-orange">{executive.name}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="text-xl text-gray-300 mb-4">{executive.title}</h4>
                      {executive.fullBio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-400 mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
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
